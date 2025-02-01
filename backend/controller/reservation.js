import ErrorHandler from "../error/error.js"
import { Reservation } from "../models/reservationSchims.js"

export const sendReservation = async (req, res, next) => {
    const {firstName,lastName, email, phone, date, time} = req.body;
    if(!firstName || !email || !phone || !time || !date){
        return next(new ErrorHandler("Please fill all fields", 400));
    }
    try {
        await Reservation.create({ firstName, lastName, email, phone, date, time });

        res.status(200).json({ success: true, message: "Reservation sent successfully" });
    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ success: false, message: validationErrors.join(" , ") });
        }

        // ✅ Return generic error response
        return res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
    }
};