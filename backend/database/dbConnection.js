import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "RESTURENT"
    })
    .then(()=> {
        console.log("connected to database Sucessfully!")
    })
    .catch((err) => {
        console.log(`Some error ocurred while connecting to database! ${err}`);
    });
};