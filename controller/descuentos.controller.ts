import { Request, Response } from "express";
import Descuento from '../models/descuento';


export const getDescuentos = async( req:Request, res:Response ) => {

    try {

        // Descuento.sync({ force: true })
        const data = await Descuento.findAll( { where : { estado : true } } )

        res.json({
            data
        })

    } catch (error) {
        console.log(error);
    }
}

export const getDescuento = async( req:Request, res:Response ) => {

    const { id } = req.params

    const descuento = await Descuento.findByPk( id )

    if (!descuento) {
        return res.status(404).json({
            msg : `El Descuento: ${id} no existe </3`
        })
    }

    res.json({
        descuento
    })
}

export const postDescuento = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const descuento = await Descuento.build( body )
        await descuento.save()

        res.json({
            descuento
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }
}

export const putDescuento = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const descuento = await Descuento.findByPk( id )
        await descuento?.update( body )

        res.json({
            descuento
        })
    } catch (error) {
        return res.status(400).json({
            msg : '</3',
            error
        })
    }
}

export const deleteDescuento = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        const descuento = await Descuento.findByPk( id )
        await descuento?.update({ estado : false })

        res.json({
            descuento
        })

    } catch (error) {

        return res.status(500).json({
            msg : 'el delete falló </3',
            error
        })
    }
}