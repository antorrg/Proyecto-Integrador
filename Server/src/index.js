const http = require('http');
const data = require('./utlils/data.js')
const PORT = 3001

http.createServer((req, res)=> {

    //cors
    res.setHeader('Access-Control-Allow-Origin', '*');

    const {url} = req
    console.log(`Llega la peticion de url: ${url}`)

    if (url === '/') {
        res.writeHead(200, {'Content-type': 'text/plain'})
        res.end("Esta funcionando")
    }

    // www.localhost:3001/rickandmorty/character/5
    // statsWith
    if (url.includes("/rickandmorty/character")){
        // split(/) + pop // at(-1)
        const id = Number(url.split("/").pop())

        const character = data.find(char => char.id === id)

       if (character){
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(character))
       } else {
        res.writeHead(400, {'Content-type': 'application/json'})
        res.end(JSON.stringify({error: "Character not found"}))
       }
    
/*
fetch(url)
.then(data => data.json())
.then(data => dispatch...)


axios(url)
.then(response.data => dispatch)

*/

  }
  





}).listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)})