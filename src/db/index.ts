import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';
import config from '../config';

dotenv.config();


export const connectDB = async(): Promise<void> =>{
    try {
        const conn = await mongoose.connect(config.urlDb,{
            dbName: 'PageCole',
        })
        console.log('mongo database is connected');
        process.on('SIGINT',(()=>{
            console.log('Disconnection');
            process.exit(0)
        }))
    } catch (error) {
        console.log('[DB] connect error',error)
        process.exit(1);
    }
};
