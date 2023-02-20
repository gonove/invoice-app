import { DataTypes } from "sequelize";
import db from '../db/connection';

const Producto = db.define('productos', {
    nombre : {
        type : DataTypes.STRING,
        allowNull : false
    },

    disponible : {
        type : DataTypes.BOOLEAN,
        allowNull : false,
        defaultValue : true

    },

    estado : {
        type : DataTypes.BOOLEAN,
        defaultValue : true
    },

    codigo : {
        type : DataTypes.INTEGER,
        unique : true,

    },

    categoria : {
        type : DataTypes.STRING,
        allowNull : false
    },


    createdAt : {
        type : DataTypes.DATE

    },
    updatedAt : {
        type : DataTypes.DATE

    }

});

export default Producto;