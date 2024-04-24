import dotenv from 'dotenv';


dotenv.config();



const config = {
    port: process.env.PORT || 3000,
    urlDb: process.env.URLBD || 'mongodb+srv://noinblake-336:RNr2vebyd9K6EdZt@cluster0.xaxibxw.mongodb.net/?retryWrites=true&w=majority',
    secretkey: process.env.SECRETKEY ,
};

export default config;