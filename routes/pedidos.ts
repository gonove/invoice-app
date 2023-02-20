import { Router } from "express";
import { deletePedido, getPedido, getPedidos, postPedido, putPedido } from '../controller/pedidos.controller';


const router = Router()


router.get( '/', getPedidos )

router.get( '/:id', getPedido )

router.post( '/', postPedido )

router.put( '/:id', putPedido )

router.delete( '/:id', deletePedido )


export default router;
