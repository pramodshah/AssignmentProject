const express = require('express');
const favicon = require('express-favicon');

const app = express()
var path = require("path");
const mongoose  = require('mongoose');
const uri = "mongodb+srv://pramodshah:prime123@cluster0.udlyb.mongodb.net/<dbname>?retryWrites=true&w=majority";



app.use(express.json());



mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(!err){
        console.log("MongoDB Connected...");
    }else{
        console.log(err);
    }
});
var Form = require('./models/form');

app.post('/postform',(req,res)=>{
    const {title,exam,image,status}= req.body;
    if(!title || !exam || !image || !status){
        return res.status(422).json({error:"Please fill all the fields!"});
    }

    var formData = new Form({
        title,
        exam,
        image,
        status

    });

    formData.save().then(result=>{
        res.json({result:result});
    }).catch(err=>{
        console.log(err);
    })
    
});

app.get('/formdata',(req,res)=>{
    Form.find({},(err,data)=>{
        if(err) throw err;
        res.json({formData:data});
    })
});
var PORT = process.env.PORT || 5000;
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
});