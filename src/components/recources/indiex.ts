import { Router } from "express";
import { validateHandler } from "../../middlewares/validatehandler";
import { createResourceSchema, getResourceSchema } from "./schema/index.schema";
import { getResources,createResources,updateResources,deleteResources } from "./controller/index.controller";



const router = Router();


router.get('/:id',validateHandler(getResourceSchema,'params'), getResources);
router.post('/',validateHandler(createResourceSchema,'body'),createResources);
router.patch('/:id',validateHandler(getResourceSchema,'params'),validateHandler(createResourceSchema,'body'),updateResources);
router.delete('/:id',validateHandler(getResourceSchema,'parmas'),deleteResources);





export default router;