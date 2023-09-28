const {Sequelize}= require('sequelize');
require ('dotenv').config();
const {DB_USER,DB_PASSWORD,DB_HOST,DB_BDD}= process.env;
//console.log({DB_USER, DB_PASSWORD, DB_HOST,DB_BDD}); 
const CreateFav = require('./models/Favorites');
const CreateUser = require('./models/Users');

const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_BDD}`,
        {logging: false}
    );
//Invocamos las funciones del modelo:
CreateFav(database);
CreateUser(database);

const {Favorite, User} = database.models;
//Aqui voy a declarar la relacion:
Favorite.belongsToMany(User, {through: 'user_fav'});
User.belongsToMany(Favorite, {through: 'user_fav'});

module.exports = {
    database, 
    ...database.models
}