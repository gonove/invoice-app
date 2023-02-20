import { Router } from "express";
import { deleteCategoria, getCategoria, getCategorias, postCategoria, putCategoria } from '../controller/categorias.controller';


const router = Router()


router.get( '/', getCategorias )

router.get( '/:id', getCategoria )

router.post( '/', postCategoria )

router.put( '/:id', putCategoria )

router.delete( '/:id', deleteCategoria )


export default router;
