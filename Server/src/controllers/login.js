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

// const users = require("../utils/users");

// const login = (req, res) => {
//   const { email, password } = req.query;
//   let access = false;

//   // const user = users.find(us => us.email === email && us.password === password)
//   // user? res.json({access: true}) : res.status(401).json({access: false})

//   users.forEach((user) => {
//     if (user.email === email && user.password === password) {
//       access = true;
//     }
//   });
//   res.json({ access });
// };
// // ? Donde vemos el error en Front? Punto a corregir

module.exports = login;
