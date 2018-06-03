const express = require('express');
const Users = require('../repository/Users');
const router = express.Router();

router.get('/users', (req, res) => {
    Users.find(function(err, users) {
        if (err){
            res.send(err);
        }
        res.status(200).json(users);
    });
});

router.post('/users', (req, res) => {
    var user = new Users();
    user.name = req.body.name;
    user.login = req.body.login;
    user.password = req.body.password;
    user.save(function(err) {
        if (err){
            res.send(err);
        }
        let response = {
            'id': user._id,
        }
        res.status(201).json(response);
    });
});


router.post('/users/:id', (req, res) => {
    res.json(200, {});
});

router.put('/users/:id', (req, res) => {
    res.json(200, {});
});

module.exports = {
  router,
};