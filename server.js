const express=require("express");
const app=express();

const db_connect=require("./connect_db");
db_connect();
app.use(express.json());
app.use("/user", require("./routes/user"));
app.use("/product", require("./routes/product"));
app.listen(5000, (err)=>err?console.log(err):console.log("server is running"));