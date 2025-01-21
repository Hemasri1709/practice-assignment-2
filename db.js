const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect (process.env.mongoURI)
        console.log('MongoDB is connected');

    }catch(err){
        console.log("error connecting to DB",err.message);
    }

}
module.exports = connectDB;
