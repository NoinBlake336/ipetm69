import { Router } from "express";
import { validateHandler } from "../../middlewares/validatehandler";
import { getNewsSchema, updateNewsSchema, createNewsSchema } from "./schema/index.schema";
import { createNews,deleteNews,getNews,updateNews } from "./controller/index.controller";

const router = Router();

router.get('/:id', validateHandler(getNewsSchema,'params'), getNews);
router.post('/', validateHandler(createNewsSchema,'body'), createNews);
router.patch('/:id', validateHandler(getNewsSchema,'params'),validateHandler(updateNewsSchema,'body'),updateNews);
router.delete('/:id',validateHandler(getNewsSchema,'params'),deleteNews)

export default router;

