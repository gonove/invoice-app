import { DataTypes } from "sequelize";
import db from '../db/connection';

const Cliente = db.define('clientes', {
    cliente : {
        type : DataTypes.STRING,
        allowNull : false
    },

    nombre : {
        type : DataTypes.STRING,
        allowNull : false
    },

    estado : {
        type : DataTypes.BOOLEAN,
        defaultValue : true
    },

    ruc : {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    descuento : {
        type : DataTypes.FLOAT,
    },

    createdAt : {
        type : DataTypes.DATE

    },
    updatedAt : {
        type : DataTypes.DATE

    }

});

export default Cliente;