const allowedOrigins = require('./allowedOrigins');

exports.corsOptiones = {
    origin: (origin, callback) => {
        if((allowedOrigins.indexOf(origin) !== -1) || (!origin)){
            callback(null, true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
}