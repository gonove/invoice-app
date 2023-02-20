import { Router } from "express";
import { deleteCliente, getCliente, getClientes, postCliente, putCliente } from '../controller/clientes.controller';


const router = Router()


router.get( '/', getClientes )

router.get( '/:id', getCliente )

router.post( '/', postCliente )

router.put( '/:id', putCliente )

router.delete( '/:id', deleteCliente )


export default router;
