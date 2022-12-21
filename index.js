const express = require('express');
const Connection = require('./connection/connection');
const blogrouter = require('./Controllers/blogController');
const { userroute } = require('./Controllers/userController');

const app = express();
const obj=[ 
    {"Name":"Sukanta Ghosh",
    "Age": 22,
    "Address":"India"},
    {"Name":"Sukanta Ghosh",
    "Age": 22,
    "Address":"India"},
    {"Name":"Sukanta Ghosh",
    "Age": 22,
    "Address":"India"},
    {"Name":"Sukanta Ghosh",
    "Age": 22,
    "Address":"India"}
    
]
app.use(express.json());

app.use("/user",userroute);
app.use("/blogs",blogrouter);
app.get('/about', (req,res)=>{
    
    try {
        res.send(obj);
    } catch (error) {
        res.send(error);
    }
})
app.get('*', (req, res)=>{
    res.send("Not found");
})

app.listen(3050, () => {
    try {
        Connection();
    console.log("listening 3050");
    } catch (error) {
        console.log("error");
    }
})