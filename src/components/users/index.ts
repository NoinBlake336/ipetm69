import {Router} from 'express';
import { validateHandler } from '../../middlewares/validatehandler';
import { getUserSchema } from './schema/index.schema';
import { UserController } from './controller/index.controller';


const controller = new UserController;

const router = Router() ;

router.get('/:id',
    validateHandler(getUserSchema,'params'),
    controller.getOneUser
);





export default router;