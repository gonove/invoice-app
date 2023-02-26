import { Request, Response } from "express";
import DetallePedido from '../models/detalles_pedidos';


export const getDetallePedidos = async( req:Request, res:Response ) => {

    try {

        // DetallePedido.sync({ force: true })
        const data = await DetallePedido.findAll( { where : { estado : true } } )

        res.json({
            data
        })

    } catch (error) {
        console.log(error);
    }
}

export const getDetallePedido = async( req:Request, res:Response ) => {

    const { id } = req.params

    const pedido = await DetallePedido.findByPk( id )

    if (!pedido) {
        return res.status(404).json({
            msg : `El pedido: ${id} no existe </3`
        })
    }

    res.json({
        pedido
    })
}

export const postDetallePedido = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const pedido = await DetallePedido.build( body )
        await pedido.save()

        res.json({
            pedido
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }
}

export const putDetallePedido = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const pedido = await DetallePedido.findByPk( id )
        await pedido?.update( body )

        res.json({
            pedido
        })
    } catch (error) {
        return res.status(400).json({
            msg : '</3',
            error
        })
    }
}

export const deleteDetallePedido = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        const pedido = await DetallePedido.findByPk( id )
        await pedido?.update({ estado : false })

        res.json({
            msg : 'deletePedido',
            id
        })

    } catch (error) {

        return res.status(500).json({
            msg : 'el delete falló </3',
            error
        })
    }
}