const {DataTypes} = require('sequelize');


module.exports = (database)=> {
    database.define("Favorites",{
        id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
        name: {type: DataTypes.STRING, unique: true, allowNull: false},
        gender:{type: DataTypes.STRING},
        status: {type: DataTypes.ENUM("Alive", "Dead", "unknown"), defaultValue: "unknown"},
        origin: {type: DataTypes.STRING},
        species: {type: DataTypes.STRING},
        image: {type: DataTypes.STRING}
    
    });
}