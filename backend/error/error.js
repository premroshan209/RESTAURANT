class ErrorHandler extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export const errorMiddleware = (err, req, res,next) => {
    err.message = err.message || "internal server error!"
    err.statusCode = err.statusCode || 500;

    return res.status(err.status || err.code || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
    
};

export default ErrorHandler;