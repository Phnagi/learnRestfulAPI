const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Student = require("./models/student");


app.set("view engine" , "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/learnMongoDB")
    .then(() =>{
        console.log("成功連結到mongoDB.....");
    }).catch((e) => {
        console.log(e);
});


app.get("/students",async(req,res) => {

    try {
        let studentData= await Student.find({}).exec();
        return res.send(studentData);
    } catch (e) {
        return res.status(500).send("尋找資料時發生錯誤");
    }


}) 


//普通寫法
// app.get("/students/:id",async (req,res) => {
//     let { id } = req.params;
//     try {
//         let foundStudent = await Student.findOne({_id:id}).exec();
//         return res.send(foundStudent);
//     } catch (e) {
//         return res.status(500).send("尋找資料時發生錯誤");
//     }
// })
//少一點的寫法
app.get("/students/:_id",async (req,res) => {
    let { _id } = req.params;
    try {
        let foundStudent = await Student.findOne({_id}).exec();
        return res.send(foundStudent);
    } catch (e) {
        return res.status(500).send("尋找資料時發生錯誤");
    }
})



// Student.findOne({_id:"64ec568ac093ede96175490d"}).exec()
//     .then((data) => {
//         console.log(data);
//     }).catch((e) => {
//         console.log(e);
//     })


app.listen(3000, () => {
    console.log("3000伺服器正在運行");
});