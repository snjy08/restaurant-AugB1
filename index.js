//import json-server
const jsonServer= require('json-server');

//crate a server appliaction using json serever
const restServer=jsonServer.create()

//setup path for db.json
const router = jsonServer.router('db.json');

//return a middlewareinstance used by  json-server
const middleware =jsonServer.defaults()

//setup  port for db.json
const port = 3001

//use in server 
restServer.use(middleware)
restServer.use(router)

//to run the server (restserver)
restServer.listen(port,()=>{
    console.log('reset server listening on port' +port);
})
