import { DataTypes } from "sequelize";
import db from '../db/connection';

const User = db.define('usuarios', {
    nombre : {
        type : DataTypes.STRING,
        allowNull : false
    },

    email : {
        type : DataTypes.STRING,
        unique : true,
        allowNull : false,
    },

    estado : {
        type : DataTypes.BOOLEAN,
        defaultValue : true,
        allowNull : false

    },
    rol : {
        type : DataTypes.STRING,
        values : ['EDITORA', 'ADMIN'],
        defaultValue : 'EDITORA'

    },
    createdAt : {
        type : DataTypes.DATE

    },
    updatedAt : {
        type : DataTypes.DATE

    }


});

export default User;