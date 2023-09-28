const {DataTypes} = require('sequelize');


module.exports = (database)=> {
    database.define("User",{
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        email: {type: DataTypes.STRING, unique: true, validate:{isEmail:true}, allowNull: false},
        password: {type: DataTypes.STRING, unique: true, allowNull: false},

    });
}