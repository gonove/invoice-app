import { DataTypes } from "sequelize";
import db from '../db/connection';

const DetallePedido = db.define('detalle_pedido', {
    cliente : {
        type : DataTypes.STRING,
        allowNull : false
    },
    usuario : {
        type : DataTypes.STRING,
        allowNull : false
    },

    id_producto : {
        type : DataTypes.STRING,
        allowNull : false
    },

    id_pedido : {
        type : DataTypes.STRING,

    },

    precio : {
        type : DataTypes.INTEGER,

    },

    iva : {
        type : DataTypes.INTEGER,

    },

    total : {
        type : DataTypes.INTEGER,

    },

    factura : {
        type : DataTypes.INTEGER,

    },

    ruc : {
        type : DataTypes.STRING,
        allowNull : false
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

export default DetallePedido;