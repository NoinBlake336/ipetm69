import  express,{Express} from 'express';
import userRouter from '../components/users';
export const router = (app)=>{
    const router = express.Router();
    router.use('/api/v2',router);
    router.use('/users', userRouter);
}
