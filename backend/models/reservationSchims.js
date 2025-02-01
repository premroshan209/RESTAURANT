import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required : true,
        minLength : 1,   
        maxLength : 30,  
    }, 
    lastName: {
        type : String, 
        maxLength : 30,  
    } ,
    email: {
        type : String,
        required : true,
        // validate : [validator.isEmail, "Provide a valid email!"],
    },
    phone : {
        type : String,
        required : true,
        // minLength : [10, "Mobile number must contain at least 10 digits!"],   
        // maxLength : [10, "Mobile number contain at max 10 digits!"],  
    },
    time : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema)

