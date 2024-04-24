import {Router} from 'express';
import { validateHandler } from '../../middlewares/validatehandler';
import { getUserSchema } from './schema/index.schema';
import { getOneUser,getUser } from './controller/index.controller';




const router = Router() ;

router.get('/:id',
    validateHandler(getUserSchema,'params'),
    getOneUser
);

router.get('/',getUser);







export default router;