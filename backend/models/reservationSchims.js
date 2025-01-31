import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type : String,
        required : true,
        minLength : [1, "First name must contain at least 3 charectors!"],   
        maxLength : [30, "First name contain at max 30 charectors!"],  
    }, 
    lastName: {
        type : String, 
        maxLength : [30, "Last name contain at max 30 charectors!"],  
    } ,
    email: {
        type : String,
        required : true,
        validate : [validator.isEmail, "Provide a valid email!"],
    },
    phone : {
        type : String,
        required : true,
        minLength : [10, "Mobile number must contain at least 10 digits!"],   
        maxLength : [10, "Mobile number contain at max 10 digits!"],  
    }
})