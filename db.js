import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://semini:Semini@cluster0.usbsmxc.mongodb.net/?retryWrites=true&w=majority")
        console.log(`MongoDB is connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ${error}`)
        process.exit(1);
    }
}

export default connectDB;
