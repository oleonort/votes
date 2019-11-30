const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User model
const User = require('../models/User');

// TODO: move this into env properties
const secret = 'some secret key';

router.post('/register', (req, res) => {
   const { name, email, password, confirmPassword } = req.body;
   const errors = [];

   if (!name || !email || !password || !confirmPassword) {
       errors.push({ msg: 'Please fill in all required fields'});
   }

   if (password !== confirmPassword) {
       errors.push({ msg: 'Passwords do no match' });
   }

   if (password.length < 6) {
       errors.push({ msg: 'Password should be at least 6 characters' });
   }

   if (errors.length) {
       res.send(errors);
   } else {
       User.findOne({ email })
           .then(user => {
               if (user) {
                   errors.push({ msg: 'Email is already registered'});
                   res.send(errors);
               } else {
                   const newUser = new User({
                       name,
                       email,
                       password
                   });

                   // Hash password
                   bcrypt.genSalt(10, (err, salt) => {
                       bcrypt.hash(newUser.password, salt, (err, hash) => {
                           if (err) throw err;
                           // Set password to hash
                           newUser.password = hash;

                           // Save user to db
                           newUser.save()
                               .then(user => res.redirect('/login'))
                               .catch(err => console.log(err))
                       });
                   });
               }
           });
   }
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(password);
    console.log(email);

    User.findOne({ email })
        .then( user => {
            if (!user) {
                res.status(401)
                    .json({ error: 'Incorrect username or password' });
            } else {
                console.log(password);
                console.log(user.password);
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        res.status(500)
                            .json({ error: 'Internal server error' });
                    } else if (!isMatch) {
                        res.status(401)
                            .json({ error: 'Incorrect username or password'});
                    } else {
                        // Issue token
                        const payload = { email };
                        const token = jwt.sign(payload, secret, { expiresIn: '20min'});
                        res.cookie('token', token, { httpOnly: true })
                            .sendStatus(200);
                    }
                });
            }
        });
});

module.exports = router;