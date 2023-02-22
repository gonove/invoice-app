import { DataTypes } from "sequelize";
import db from '../db/connection';

const Pedido = db.define('pedido', {
    cliente : {
        type : DataTypes.STRING,
        allowNull : false
    },
    usuario : {
        type : DataTypes.STRING,
        allowNull : false
    },

    ruc : {
        type : DataTypes.INTEGER,
        allowNull : false

    },
    productos : {
        type : DataTypes.STRING,
        allowNull : false
    },

    numero_factura : {
        type : DataTypes.STRING,
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

export default Pedido;