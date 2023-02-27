import { Router } from "express";
import { deleteDescuento, getDescuento, getDescuentos, postDescuento, putDescuento } from '../controller/descuentos.controller';


const router = Router()


router.get( '/', getDescuentos )

router.get( '/:id', getDescuento )

router.post( '/', postDescuento )

router.put( '/:id', putDescuento )

router.delete( '/:id', deleteDescuento )


export default router;
