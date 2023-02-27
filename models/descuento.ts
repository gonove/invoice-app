import { DataTypes } from "sequelize";
import db from '../db/connection';

const Descuento = db.define('descuentos', {
    cliente : {
        type : DataTypes.STRING,
        allowNull : false
    },

    id_producto : {
        type : DataTypes.STRING,
        allowNull : false
    },

    estado : {
        type : DataTypes.BOOLEAN,
        defaultValue : true
    },

    precio : {
        type : DataTypes.INTEGER,
    },

    createdAt : {
        type : DataTypes.DATE

    },
    updatedAt : {
        type : DataTypes.DATE

    }

});

export default Descuento;