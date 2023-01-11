const express = require('express');
const ConnectionFn = require('./config/db');
const blogrouter = require('./Controllers/blogController');
const { userroute } = require('./Controllers/userController');
const cors= require('cors');
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
app.use(cors());
const PORT = process.env.PORT || 3050

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

app.listen(PORT, () => {
    try {
        ConnectionFn();
    console.log("listening PORT");
    } catch (error) {
        console.log("error");
    }
})