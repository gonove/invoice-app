import { Router } from "express";
import { deleteDetallePedido, getDetallePedido, getDetallePedidos, postDetallePedido, putDetallePedido } from '../controller/detalle_pedido.controller';


const router = Router()


router.get( '/', getDetallePedidos )

router.get( '/:id', getDetallePedido )

router.post( '/', postDetallePedido )

router.put( '/:id', putDetallePedido )

router.delete( '/:id', deleteDetallePedido )


export default router;
