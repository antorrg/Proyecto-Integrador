const http = require('http');
//const data = require('./utlils/data.js')
const getCharById= require('.controlers/getCharById.js');
const PORT = 3001

http.createServer((req, res)=> {

    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req
    //console.log(`Llega la peticion de url: ${url}`)

    // if (url === '/') {
    //     res.writeHead(200, {'Content-type': 'text/plain'})
    //     res.end("Esta funcionando")
    // }

     if (url.includes("/rickandmorty/character")){

        const id = Number(url.split("/").pop())
        getCharById(res,id)

        const character = data.find(char => char.id === id)

        if (character){
         res.writeHead(200, {'Content-type': 'application/json'})
         res.end(JSON.stringify(character))
        } 
        //else {
/     //res.writeHead(400, {'Content-type': 'application/json'})
        // res.end(JSON.stringify({error: "Character not found"}))
        //}
    
  }
  
}).listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)})