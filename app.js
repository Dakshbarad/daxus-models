const express = require("express");
const app= express();


app.use(express.static("public"));
app.set("view engine",'ejs');
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/",(req,res) =>{
    res.render("home");
});

app.get("/models",(req,res) =>{
    res.render("models");
});

app.get("/about",(req,res) =>{
    res.render("about");
});

app.get("/apply",(req,res) =>{
    res.render("apply");
});

app.get("/contact",(req,res) =>{
    res.render("contact");
});

// Port listener
app.listen(3000,()=>{
    console.log("server running on port 3000...");
});