import mongoose from "mongoose";

mongoose.set('strictQuery', false);

const connectToDb = async () => {
    await mongoose.connect("mongodb+srv://LMS:LMS@learningmanagementsyste.4ylujbz.mongodb.net/?retryWrites=true&w=majority&appName=LearningmanagementSystem")
    .then((conn) => {console.log(`db connected: ${conn.connection.host}`);})
    .catch((err) => {console.log(`error in connected db: ${err.message}`);})
}

export default connectToDb;