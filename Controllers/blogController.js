const express = require('express');
const blogs = require('../Schema/BlogSchema');

const blogrouter = express.Router();

blogrouter.get('/', async (req, res) => {
    try {
        const blog = await blogs.find().populate("user_id").lean().exec();
        return res.send({
            status: "succes",
            data: blog
        })
    } catch (error) {
        return res.status(500).send({
            status: "Error",
            data: "Internal Server Error"
        })
    }
})

blogrouter.post('/create', async (req, res) => {
    try {
        const blog = await blogs.create(req.body);
        return res.send({
            staus: "Success",
            data: blog
        })
    } catch (error) {
        return res.status(500).send({
            status: "Error",
            data: "Internal Server Error"
        })
    }
})
blogrouter.patch('/:id', async (req, res) => {
    try {
        let {id} = req.params;
        const blog = await blogs.findByIdAndUpdate(id, req.body, {new: true});
        return res.send({
            staus: "Success",
            data: blog
        })
    } catch (error) {
        return res.status(500).send({
            status: "Error",
            data: "Internal Server Error"
        })
    }
})
blogrouter.delete('/:id', async (req, res) => {
    try {
        let {id} = req.params;
        const blog = await blogs.findByIdAndDelete(id);
        return res.send({
            staus: "Success",
            data: blog
        })
    } catch (error) {
        return res.status(500).send({
            status: "Error",
            data: "Internal Server Error"
        })
    }
})







module.exports = blogrouter;