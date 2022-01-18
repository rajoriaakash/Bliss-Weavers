const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

const signUp = (req,res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) res.status(400).json(
        {
            msg: 'Please enter al fields'
        });

    User.findOne({email})
    .then(user => {
        if(user) return res.status(400).json(
            {
                msg: 'User already exists'
            });
            const newUser = new User({ name, email, password });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                {id : user._id},
                                config.get('jwtsecret'),
                                {expiresIn : 3600},
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user._id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                }
                            )
                        })
            });
            });
    })
}

const login = async (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400).json(
            {
                msg: 'Please enter all fields'
            });
    }
    User.findOne({email})
        .then(user => {
            if(!user) return res.status(400).json(
                {
                    msg: 'User does not exist'
                });

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json(
                        {
                             msg: 'Invalid credentials'
                        });

                    jwt.sign(
                        { id: user._id },
                        config.get('jwtsecret'),
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user._id,
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    )
                })
        })
}
const getUser = (req,res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user=> res.json(user));
}

module.exports = {
    signUp,
    login,
    getUser
}