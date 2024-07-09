import mongoose, { mongo } from "mongoose";

async function conectaDB () {
   
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    // mongoose.connect("mongodb+srv://vitortl:xv4a4UGVasWha@cluster0.nefdwzz.mongodb.net/Library?retryWrites=true&w=majority&appName=Cluster0");
    // mongoose.connect("mongodb+srv://vitortl:xv4a4UGVasWha@cluster0.nefdwzz.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}


export default conectaDB;


