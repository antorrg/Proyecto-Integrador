const { Favorite, User } = require('../database');
//const { Op } = require('sequelize');

const deleteFav = async (req, res) => {
    try {
        const {id} = req.params;
        await Favorite.destroy({where: {id}});
        const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites);

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

// const deleteFav = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const fav = await Favorite.findByPk(id);

//         if (!fav) {
//             return res.status(404).json({ error: 'Favorite not found' });
//         }
        
//         // Consulto si otros usuarios tienen el mismo favorito
//         const usersWithSameFavorite = await User.findAll({
//             where: {
//                 id: {
//                     [Op.ne]: req.user.id, // Excluye al usuario actual
//                 },
//             },
//             include: [
//                 {
//                     model: Favorite,
//                     where: { id: fav.id },
//                     required: true, // Solo usuarios con este favorito
//                 },
//             ],
//         });

//         if (usersWithSameFavorite.length > 0) {
//             // Otros usuarios tienen este favorito, solo lo disocio.
//             await req.user.removeFavorite(fav);
//         } else {
//             // Nadie más tiene este favorito, lo elimino completamente
//             await fav.destroy();
//         }

//         res.status(200).json({ message: 'Favorite deleted successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

module.exports = deleteFav;
