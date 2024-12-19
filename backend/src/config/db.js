import mongoose from"mongoose";

const connectDB=async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connect to DB")
    }catch(error){
        console.log("Error Connecting",error)
    }
}

export default connectDB;