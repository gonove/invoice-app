import { Request, Response } from "express";
import Cliente from '../models/cliente';


export const getClientes = async( req:Request, res:Response ) => {

    try {

        Cliente.sync({ force: true })
        const data = await Cliente.findAll( { where : { estado : true } } )

        res.json({
            data
        })

    } catch (error) {
        console.log(error);
    }
}

export const getCliente = async( req:Request, res:Response ) => {

    const { id } = req.params

    const cliente = await Cliente.findByPk( id )

    if (!cliente) {
        return res.status(404).json({
            msg : `El Cliente: ${id} no existe </3`
        })
    }

    res.json({
        cliente
    })
}

export const postCliente = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const cliente = await Cliente.build( body )
        await cliente.save()

        res.json({
            cliente
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }
}

export const putCliente = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const cliente = await Cliente.findByPk( id )
        await cliente?.update( body )

        res.json({
            cliente
        })
    } catch (error) {
        return res.status(400).json({
            msg : '</3',
            error
        })
    }
}

export const deleteCliente = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        const cliente = await Cliente.findByPk( id )
        await cliente?.update({ estado : false })

        res.json({
            cliente
        })

    } catch (error) {

        return res.status(500).json({
            msg : 'el delete falló </3',
            error
        })
    }
}