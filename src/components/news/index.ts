import { Router } from "express";
import { validateHandler } from "../../middlewares/validatehandler";
import { getNewsSchema, updateNewsSchema, createNewsSchema } from "./schema/index.schema";
import { createNews } from "./controller/index.controller";

const router = Router();

router.get('/:id', validateHandler(getNewsSchema,'params'));
router.post('/', validateHandler(createNewsSchema,'body'), createNews);
router.patch('/:id', validateHandler(getNewsSchema,'params'),validateHandler(updateNewsSchema,'body'));


export default router;

