const express = require("express");
const Router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "iNoteBook";


//create a user using :POST "/api/auth/"

Router.post("/createuser", [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 8 characters").isLength({ min: 8 }),

], async (req, res) => {

    //if there are errors return bad request

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check whether user with same email exist
    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "sorry a user already exists" })
        }

        //bcryptjs
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt)
         
        //create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })
        //   .then(user => res.json(user))
        //   .catch(err=> {
        //     console.log(err);
        //     res.json({error:"please enter a unique value", message:err.message})
        //   });

        //jwtToken

        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        res.json({authToken});

        // res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occur")
    }
})
module.exports = Router;