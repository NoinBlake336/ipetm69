export const logErrors = (err,req,res,next):void=>{
    next(err);
};


export const errorHandler = (err,req,res,next):void=>{
    return res.status(500).json({
        message:err.message,
        stack:err.stack
    });
};

export const boomErrorHandler = (err,req,res,next):void =>{
    if(err.boom){
        const {ouptup} = err;
        res.status(ouptup.statusCode).json(ouptup.payload);
    }else{
        next(err);
    };
};