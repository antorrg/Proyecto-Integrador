const {User} = require('../database');

const login = async (req, res) => {
  try {
    const { email, password } = req.query;
    if(!email || !password) return res.status(400).json({error: 'Faltan datos'});

    const loggedUser = await User.findOne({where: {email}});

    if(!loggedUser) return res.status(404).json({error: 'Usuario no encontrado'});

    return loggedUser.password === password 
      ? res.status(200).json({access: true}) 
      : res.status(401).json({access: false});

  }catch (error) {
    return res.status(500).json({error: error.message});
  
};
}

module.exports = login;
