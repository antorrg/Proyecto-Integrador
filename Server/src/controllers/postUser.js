const {User} = require('../database');

const postUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) return res.status(400).json({error: 'Faltan datos'});
        const [createdUser, created] = await User.findOrCreate({where: {email}, defaults: {password}});
        if(created){
            return res.status(201).json(createdUser);
        } else{
            return res.status(200).json(createdUser);
        }
    
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};
module.exports = postUser;