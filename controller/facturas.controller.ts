import { Request, Response } from "express";
import Factura from '../models/factura';


export const getFacturas = async( req:Request, res:Response ) => {

    try {

        // Factura.sync({ force: true })
        const data = await Factura.findAll( { where : { estado : true } } )

        res.json({
            data
        })

    } catch (error) {
        console.log(error);
    }
}

export const getFactura = async( req:Request, res:Response ) => {

    const { id } = req.params

    const factura = await Factura.findByPk( id )

    if (!factura) {
        return res.status(404).json({
            msg : `El Factura: ${id} no existe </3`
        })
    }

    res.json({
        Factura
    })
}

export const postFactura = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const factura = await Factura.build( body )
        await factura.save()

        res.json({
            factura
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }
}

export const putFactura = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const factura = await Factura.findByPk( id )
        await factura?.update( body )

        res.json({
            factura
        })
    } catch (error) {
        return res.status(400).json({
            msg : '</3',
            error
        })
    }
}

export const deleteFactura = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        const factura = await Factura.findByPk( id )
        await factura?.update({ estado : false })

        res.json({
            factura
        })

    } catch (error) {

        return res.status(500).json({
            msg : 'el delete falló </3',
            error
        })
    }
}