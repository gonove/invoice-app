import { Router } from "express";
import { deleteProducto,
        getProducto,
        getProductos,
        postProducto,
        putProducto
    } from '../controller/productos.controller';

const router = Router()


router.get( '/', getProductos )

router.get( '/:id', getProducto )

router.post( '/', postProducto )

router.put( '/:id', putProducto )

router.delete( '/:id', deleteProducto )


export default router;
