import mongoose from "mongoose";

const connectDB = async (DATABSE_URL) => {
    try {
        await mongoose.connect(DATABSE_URL)
        console.log("Database Connnected SuccessFully")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;