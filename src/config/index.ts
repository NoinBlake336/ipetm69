import dotenv from 'dotenv';

dotenv.config();



const config = {
    port: process.env.PORT || 3000,
    urlDb: process.env.URLBD || 'http://example.com',
}

export default config;