const mongoose=require("mongoose");

const db_connect=async()=>{
try {
    let result=await mongoose.connect("mongodb+srv://fatma:fatma123@cluster0.ondwve7.mongodb.net/");
    console.log("database is connected")
} catch (error) {
    console.log(error)
}
}


module.exports=db_connect