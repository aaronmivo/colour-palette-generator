const router = require("express").Router();
const User = require("../models/userModel")

router.post("/", async (req, res) => {
    try {
    const {username, password, passwordVerify} = req.body
    if(!username || !password || !passwordVerify){
        return res.status(400).json({errorMessage: "Missing fields"})
    }  
    if(password.length < 8){
        return res.status(400).json({errorMessage: "Password too short"})
    }

    if(password !== passwordVerify){
        return res.status(400).json({errorMessage: "Passwords do not match"})
    }

    const existingUser = await User.findOne({email: email})

    if(existingUser){
        return res.status(400).json({errorMessage: "Username is already taken"})
    }
    } catch(err){
        console.error(err)
        res.status(500).send()
    }
})

module.exports = router;