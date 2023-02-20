import { Request, Response } from "express";
import Categoria from '../models/categoria';


export const getCategorias = async( req:Request, res:Response ) => {

    try {

        Categoria.sync({ force: true })
        const data = await Categoria.findAll( { where : { estado : true } } )

        res.json({
            data
        })

    } catch (error) {
        console.log(error);
    }
}

export const getCategoria = async( req:Request, res:Response ) => {

    const { id } = req.params

    const categoria = await Categoria.findByPk( id )

    if (!categoria) {
        return res.status(404).json({
            msg : `El Categoria: ${id} no existe </3`
        })
    }

    res.json({
        Categoria
    })
}

export const postCategoria = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const categoria = await Categoria.build( body )
        await categoria.save()

        res.json({
            Categoria
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }
}

export const putCategoria = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const categoria = await Categoria.findByPk( id )
        await categoria?.update( body )

        res.json({
            Categoria
        })
    } catch (error) {
        return res.status(400).json({
            msg : '</3',
            error
        })
    }
}

export const deleteCategoria = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        const categoria = await Categoria.findByPk( id )
        await categoria?.update({ estado : false })

        res.json({
            categoria
        })

    } catch (error) {

        return res.status(500).json({
            msg : 'el delete falló </3',
            error
        })
    }
}