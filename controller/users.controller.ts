import { Request, Response } from "express";
import User from '../models/usuario';


export const getUsers = async( req:Request, res:Response ) => {

    try {

        // User.sync({ force: true })
        const data = await User.findAll()

        res.json({
            data
        })
    } catch (error) {
        console.log(error);
    }

}

export const getUser = async( req:Request, res:Response ) => {

    const { id } = req.params

    const usuario = await User.findByPk( id )

    if (!usuario) {
        return res.status(404).json({
            msg : `El usuario: ${id} no existe </3`
        })
    }

    res.json({
        usuario
    })
}

export const postUser = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const usuario = await User.build( body )
        await usuario.save()

        res.json({
            usuario
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }

}

export const putUser = async( req:Request, res:Response ) => {

    const { id } = req.params
    const { body } = req

    try {

        const usuario = await User.findByPk( id )
        await usuario?.update( body )

        res.json({
            usuario
        })
    } catch (error) {
        return res.status(400).json({
            msg : '</3',
            error
        })
    }
}

export const deleteUser = async( req:Request, res:Response ) => {

    const { id } = req.params

    try {
        const usuario = await User.findByPk( id )
        await usuario?.update({ estado : false })

        res.json({
            msg : 'deleteUser',
            id
        })

    } catch (error) {

        return res.status(500).json({
            msg : 'el delete falló </3',
            error
        })
    }
}