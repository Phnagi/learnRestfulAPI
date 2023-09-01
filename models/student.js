const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
 
    name:{type:String,require:true,minlength:2},
    age:{type:Number,require:true,default:18,max:[80,"可能有點太老了"],},
    scholarship:{
        merit:{type:Number,min:0,max:[5000,"你拿很多錢喔"]},
        other:{type:Number,default:0}
    }
    
})

const Student = mongoose.model("student",studentSchema);
module.exports = Student;