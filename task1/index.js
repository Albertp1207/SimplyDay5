const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userValidation = require("./tools/userValidation")
const api = require("./api");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];


app.set('view engine', 'pug');
app.set('views', 'views')

app.use(cookieParser());

app.use("/", (req,res,next) => {
    if(!req.cookies["current time"]){
        const date = new Date();
        res.cookie("current time", date); 
    }
    next();
})

app.get("/", (req,res) => {
    const currentTime = req.cookies["current time"];
    res.render("index",{currentTime})
})

app.get("/myroute/:param", (req,res) => {
    res.render("myroute",{
        param: req.params.param,
        query: req.query,
        headers: req.headers,
        cookies: req.cookies
    })
})

app.get("/form", (req,res) => {
    res.render("form",{error:false})
})
app.post("/form", (req,res) => {

    const isUserValid = userValidation(req.body);

    if(isUserValid) {
        users.push(req.body)
        res.redirect("/result")
    } else {
        res.render("form",{error:true})
    }

})

app.get("/result",(req,res) => {
    res.render("result",{users})
})

//for api
app.set("users",users);
//api
app.use("/api",api)

app.listen(3000);