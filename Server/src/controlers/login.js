const users = require('../utlils/users');

const login = (req, res) => {
    const {username, password} = req.query;
    let access = false;
    users.forEach(user => {
        if(user.email === email && user.password === password)
        access = true;
    });
    res.json({access})
}
module.exports = login;