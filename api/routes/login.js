//const auth = require("./../middleware/auth");
const express = require('express');
const jwt = require('jsonwebtoken');
const { model } = require('mongoose');
const router = express.Router();

router.post('/', (req, res) => {

    console.log("Message");

    const user = {
        Email: req.body.Email,
        Password: req.body.Password
    };

    console.log(user);
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root', 
        password: 'Griffith@99',
        database: 'classicmodels'
    })

        // Create token
        const token = jwt.sign(
            { user_id: 2, Email: user.Email },
            'TokenProvidedforApiProjectByGriffithDavis',
            {
              expiresIn: "2h",
            }
          );
          // save user token
          user.token = token;
      
          // return new user
          res.status(201).json(user);
          console.log("Login successful..")
    
});

module.exports = router