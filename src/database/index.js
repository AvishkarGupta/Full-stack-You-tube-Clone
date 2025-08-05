import mongooes, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

/*import express from "express"

const app = express()*/

const connectDB = async ()=>{
  try{
    console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URL);
    const connecionInstance =  await mongooes.connect(`${process.env.MONGODB_URL}/${DB_NAME}?retryWrites=true&w=majority`)
    console.log(`\nMongoDB connected !! DB host: ${connecionInstance.connection.host}`)
    /*
    app.on((error)=>{
      console.log("App is not able to listen.", error)
      throw error
    })

    app.listen(process.env.PORT, ()=>{
      console.log("App is listening to port", process.env.PORT)
    })*/

  }catch (error) {
    console.error("error:", error)
    // throw error
    process.exit(1)
  }
}

export default connectDB;