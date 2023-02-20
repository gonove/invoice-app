import { DataTypes } from "sequelize";
import db from '../db/connection';

const User = db.define('pruebas_usuarios_dos', {
    nombre : {
        type : DataTypes.STRING
    },

    email : {
        type : DataTypes.STRING
    },

    estado : {
        type : DataTypes.BOOLEAN,

    },
    createdAt : {
        type : DataTypes.DATE

    },
    updatedAt : {
        type : DataTypes.DATE

    }


});

export default User;