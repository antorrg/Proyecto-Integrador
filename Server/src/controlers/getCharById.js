const axios = require('axios');


const getCharById = (res, id) => {
 axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) =>{
        const {name, status, species, origin = origin.name, gender, image} = data;
        const character ={name, gender, origin, species, image, id, status}
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(JSON.stringify(character))
     })
    .catch((reason) =>{
        res.writeHead(500, {'content-type': 'text/plain'})
        res.end(reason.message)
    })
}

module.exports = getCharById;