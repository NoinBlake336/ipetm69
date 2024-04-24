import express,{Express, Request, Response} from 'express';
import config from '../config';
import { connectDB } from '../db';
import bodyParser from 'body-parser';
import { boomErrorHandler, errorHandler, logErrors } from '../middlewares/error.handler';
import userRouter from '../components/users';
import newsRouter from '../components/news';
import resourceRouter from '../components/resources';
import authRouter from '../components/auth';
import dashboardRouter from '../components/dashboard';
import '../utils/auth';


export class Server {
    app: Express

    constructor(){
        this.app = express();
        this.dbConnection();
        this.middlewares();
        this.router();
        this.errorHandler();
        this.listen();
    };

    async dbConnection(): Promise<void>{
        await connectDB();
    };

    middlewares(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:false}));

    };

    errorHandler(){
        this.app.use(logErrors);
        this.app.use(errorHandler);
        this.app.use(boomErrorHandler);
    }


    router(): void{
        this.app.use('/users', userRouter);
        this.app.use('/news', newsRouter );
        this.app.use('/recources',resourceRouter);
        this.app.use('/auth', authRouter);
        this.app.use('/dashboard', dashboardRouter)
    }


    listen(): void{
        this.app.listen(config.port, ()=>{
            console.log('Bienvenido al servidor',config.port);
        });
    }
}