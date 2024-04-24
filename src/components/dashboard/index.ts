import { Request, Response, Router } from "express";
import { authenticateToken } from "../../middlewares/authenticate.token";


const router = Router();

router.get('/',authenticateToken,async(req:Request,res:Response,next)=>{res.json('bienvenido')})

export default router;