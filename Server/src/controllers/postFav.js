const {Favorite} = require('../database');

const postFavorite = async (req, res) => {
    try {
        const {id, name, status, species, gender, image} = req.body;
        if(!id || !name || !status || !species || !gender|| !image) return res.status(401).json({message: 'Faltan datos'})
        await Favorite.findOrCreate({
            where: {id, name, status, species, gender, image},
        });

        const allFavorites = await Favorite.findAll();
        return res.status(201).json(allFavorites);
        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

module.exports = postFavorite;