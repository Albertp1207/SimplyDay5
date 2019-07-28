const express = require('express');
const router = express.Router();
const userValidation = require("./tools/userValidation");

router.get("/time", (req,res) => {
    const date = new Date();
    const time = date.getHours() + ":" + date.getMinutes() + ":" +date.getSeconds();
    const data = {
        time
    }
    res.send(data)
})
router.post("/users", (req,res) => {
    const users = req.app.get("users");
    const isUserValid = userValidation(req.body);
    if(isUserValid) {
        users.push(req.body)
        res.status(200).json({status:"ok"})
    } else {
        res.status(400).json({status:"Bad Request "})
    }
})
router.get("/users", (req,res) => {
    const users = req.app.get("users");
    res.send(JSON.stringify(users))
})

module.exports = router;


