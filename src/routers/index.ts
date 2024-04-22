import  express,{Express} from 'express';

export const Router = (app:Express)=>{
    const router = express.Router();
    app.use('/api/v2',router);
    router.use('/users', )
}
