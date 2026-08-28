const mongoose = require("mongoose");
async function connectDB(){
    await mongoose.connect(process.env.DB_URL);
    console.log("Mongodb is connected.");
}
module.exports={
    connectDB,
};