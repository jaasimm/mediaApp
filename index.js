//import json server
const jsonServer=require('json-server')
// create server application using json server
const mediaAppServer=jsonServer.create()
// create a middleware used by json server
const middleware=jsonServer.defaults()
//create router: set up router for db.json file
const router =jsonServer.router('db.json')
//applying middleware to server
mediaAppServer.use(middleware)
//applying router to server
mediaAppServer.use(router)
//define port
const PORT =3000
//starting the server
mediaAppServer.listen(PORT,()=>{
    console.log("media app server started on port"+PORT);
    
})