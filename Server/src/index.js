const express = require('express');
const getCharById = require('./controlers/getCharById.js');
const server = express();
const PORT = 3001
const {router} = require('/routes/index.js');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json());

server.use('./rickandmorty', router);

server.listen(PORT, () => {
    console.log(`Server levantado en puerto ${PORT}`); 
})



// ! HTTP
//const http = require('http');
//const data = require('./utlils/data.js');
/*http.createServer((req, res)=> {

    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req
    //console.log(`Llega la peticion de url: ${url}`)

    // if (url === '/') {
    //     res.writeHead(200, {'Content-type': 'text/plain'})
    //     res.end("Esta funcionando")
    // }

     if (url.includes("/rickandmorty/character")){
         const id = Number(url.split("/").pop())
         getCharById(res, id)
        }
        else {
        res.writeHead(400, {'Content-type': 'application/json'})
        res.end(JSON.stringify({error: "Route not found"}))
        }
         
        //const character = data.find(char => char.id === id)

        // if (character){
        //  res.writeHead(200, {'Content-type': 'application/json'})
        //  res.end(JSON.stringify(character))
        // } 
  
}).listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)})*/