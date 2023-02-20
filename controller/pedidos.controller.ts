import { Request, Response } from "express";
import Pedido from '../models/pedido';


export const getPedidos = async( req:Request, res:Response ) => {

    try {

        // Pedido.sync({ force: true })
        const data = await Pedido.findAll( { where : { estado : true } } )

        res.json({
            data
        })

    } catch (error) {
        console.log(error);
    }
}

export const getPedido = async( req:Request, res:Response ) => {

    const { id } = req.params

    const pedido = await Pedido.findByPk( id )

    if (!pedido) {
        return res.status(404).json({
            msg : `El pedido: ${id} no existe </3`
        })
    }

    res.json({
        pedido
    })
}

export const postPedido = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const pedido = await Pedido.build( body )
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

export const putPedido = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const pedido = await Pedido.findByPk( id )
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

export const deletePedido = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        const pedido = await Pedido.findByPk( id )
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