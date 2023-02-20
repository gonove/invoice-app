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

    const { id } = req.params;

    try {

        const data = await User.findByPk( id )

        res.json({
            data
        })
    } catch (error) {
        console.log(error);
    }
}

export const postUser = async( req:Request, res:Response ) => {

    const { body } = req;

    try {

        const usuario = await User.build( body )
        await usuario.save()

        res.json({
            msg : 'postUser',
            usuario
        })
    } catch (error) {
        res.json({
            msg : error
        })
    }

}

export const putUser = ( req:Request, res:Response ) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg : 'putUser',
        body,
        id
    })
}

export const deleteUser = ( req:Request, res:Response ) => {

    const { id } = req.params;

    res.json({
        msg : 'deleteUser',
        id
    })
}