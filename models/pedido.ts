import { DataTypes } from "sequelize";
import db from '../db/connection';

const User = db.define('pedido', {
    cliente : {
        type : DataTypes.STRING,
        allowNull : false
    },
    usuario : {
        type : DataTypes.STRING,
        allowNull : false
    },

    // fecha_pedido : {
    //     type : DataTypes.DATE,
    //     unique : true,
    //     allowNull : false,
    // },

    ruc : {
        type : DataTypes.INTEGER,
        allowNull : false

    },
    productos : {
        type : DataTypes.STRING,
        // values : ['EDITORA', 'ADMIN'],

    },
    estado : {
        type : DataTypes.BOOLEAN,
        defaultValue : true
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

export default User;