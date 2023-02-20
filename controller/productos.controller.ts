import { Request, Response } from "express";
import Producto from '../models/producto';


export const getProductos = async( req:Request, res:Response ) => {

    try {

        // Producto.sync({ force: true })
        const data = await Producto.findAll( { where : { estado : true } } )

        res.json({
            data
        })

    } catch (error) {
        console.log(error);
    }
}

export const getProducto = async( req:Request, res:Response ) => {

    const { id } = req.params

    const producto = await Producto.findByPk( id )

    if (!producto) {
        return res.status(404).json({
            msg : `El Producto: ${id} no existe </3`
        })
    }

    res.json({
        producto
    })
}

export const postProducto = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const producto = await Producto.build( body )
        await producto.save()

        res.json({
            producto
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }
}

export const putProducto = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const producto = await Producto.findByPk( id )
        await producto?.update( body )

        res.json({
            Producto
        })
    } catch (error) {
        return res.status(400).json({
            msg : '</3',
            error
        })
    }
}

export const deleteProducto = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        const producto = await Producto.findByPk( id )
        await producto?.update({ estado : false })

        res.json({
            msg : 'deleteProducto',
            id
        })

    } catch (error) {

        return res.status(500).json({
            msg : 'el delete falló </3',
            error
        })
    }
}