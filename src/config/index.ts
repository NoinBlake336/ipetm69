import dotenv from 'dotenv';


dotenv.config();



const config = {
    port: process.env.PORT || 3000,
    urlDb: process.env.URLBD || 'mongodb+srv://pageIpetym69:pagewipetym@cluster0.xaxibxw.mongodb.net/?retryWrites=true&w=majority',
    secretkey: process.env.SECRETKEY || "desarrolloWebEsmiPasion45552"
};

export default config;
