const express = require("express");
const Router = express.Router();
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "iNoteBook";

//create a user using :POST "/api/auth/"
//ROUTE 1
Router.post("/createuser", [
    body('name', "Enter a valid name").isLength({ min: 3 }),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 8 characters").isLength({ min: 8 }),

], async (req, res) => {
    let success = false;
    //if there are errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check whether user with same email exist
    try {

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, error: "sorry a user already exists" })
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
        success = true;
        const authToken = jwt.sign(data,JWT_SECRET);
        res.json({success,authToken});

        // res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }
})

//ROUTE 2

 //authenticate a user using POST "api/auth/login"

 Router.post("/login", [
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password cannot be blank").exists()
], async (req, res) => {
   
    let success = false;
    //if there are errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
                                                                                                                                                                                                                                   
    const {email,password} = req.body;

    try {

        let user = await User.findOne({email});

        if(!user){
            return res.status(400).json({success,error:"Invalid Credentials"})
        }
        const passwordCompare = await bcrypt.compare(password,user.password);

        if(!passwordCompare){
            return res.status(400).json({success,error:"Invalid Credentials"})
        }

        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        success = true;
        res.json({success,authToken});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("some error occured")
    }

});

//ROUTE 3
Router.post("/getuser",fetchuser,async (req, res) => {

try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)

} catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured")
}
});
module.exports = Router;