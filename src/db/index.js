import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDb = async() =>{
    try {
       const connecctionInstance=  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`MongoDb connected !! host: ${connecctionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Coneection Error ", error);
        process.exit(1);
    }
} 

export default connectDb;