const express = require('express');
const user = require('../Schema/UserSchema');
const jwt = require("jsonwebtoken");
const JWT_SECRET = "iddfki4r598hdafknpd8h3kn3p8h9rknafhsdfir3kn"
const bcrypt = require("bcryptjs")

const userroute = express.Router();



userroute.post('/login', async (req, res) => {
    try {
        const email = await user.findOne({username: req.body.username});
        if(!email) {
            return res.status(400).send({
                status: "error",
                data: "Invalid Credentials"
            })
        }
        const password = bcrypt.compareSync(req.body.password, email.password);
        console.log(password);
        if(!password) {
            return res.status(400).send({
                status: "error",
                data: "Invalid Credentials"
            })
        }

        const token = jwt.sign(req.body, JWT_SECRET);
        return res.send({
            status: 'success',
            data: token,
            id: email._id
        })
    } catch (error) {
        return res.status(500).send({
            status: "Error",
            data: "Internal Server Error"
        })
    }
})

userroute.post('/reg', async (req, res) => {
    try {
        const find = await user.findOne({email: req.body.email});
        if(find) {
            return res.status(400).send({
                status: "error",
                data: "User already exists"
            })
        }
        const details = await user.create(req.body);
        return res.send({
            status: 'success',
        })
    } catch (error) {
        return res.status(500).send({
            status: "Error",
            data: "Internal Server Error"
        })
    }
})

userroute.get('/', async(req, res) => {
    try {
       const find = await user.findOne({username: req.query.q});
        res.send(find)
        console.log(req.query.q,"djkdj")
    } catch (error) {
        return res.status(500).send({
            status: "Error",
            data: "Internal Server Error"
        })
    }
})





module.exports = {userroute}