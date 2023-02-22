import { DataTypes } from "sequelize";
import db from '../db/connection';

const Factura = db.define('facturas', {
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

    usuario : {
        type : DataTypes.STRING,
        allowNull : false,

    },

    numero_factura : {
        type : DataTypes.STRING,

    },

    plazo : {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    fecha_vencimiento : {
        type : DataTypes.DATE,
        allowNull : false
    },

    createdAt : {
        type : DataTypes.DATE

    },
    updatedAt : {
        type : DataTypes.DATE

    }

});

export default Factura;