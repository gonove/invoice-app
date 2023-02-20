import { DataTypes } from "sequelize";
import db from '../db/connection';

const Categoria = db.define('categoria', {

    nombre : {
        type : DataTypes.STRING,
        allowNull : false
    },

    estado : {
        type : DataTypes.BOOLEAN,
        defaultValue : true
    },

    createdAt : {
        type : DataTypes.DATE

    },
    updatedAt : {
        type : DataTypes.DATE

    }

});

export default Categoria;