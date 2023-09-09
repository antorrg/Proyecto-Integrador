const router = require('express').Router();
// Controllers
const login = require ('../controlers/login')
const getCharById = require ('../controlers/getCharById')
const {postFav, deleteFav} = require ('../controlers/handleFavs')

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = {router}; 