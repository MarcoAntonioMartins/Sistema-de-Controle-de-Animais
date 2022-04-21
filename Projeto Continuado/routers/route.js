const express = require('express');
const controllerAnimal = require('../controllers/controllerAnimal');
const controllerUsuario = require('../controllers/controllerUsuario');

const route = express.Router();

module.exports = route;

//Home


route.get("/home",function(req,res){
    res.render('home');
});
route.get("/logout", controllerUsuario.getLogout);

//Controller Usuario
//Usuario - Login e Recuperação de Senha
route.get("/", controllerUsuario.getLogin);
route.post("/login", controllerUsuario.postLogin);
route.get("/logout", controllerUsuario.getLogout);
route.get("/recuperarSenha/:login", controllerUsuario.getRecuperarSenha);
route.post("/recuperarSenha", controllerUsuario.postRecuperarSenha);


//Usuario - CRUD
route.get("/usuarioCreate", controllerUsuario.getCreate);
route.post("/usuarioCreate", controllerUsuario.postCreate);
route.get("/usuarioList", controllerUsuario.getList);
route.get("/usuarioEdit/:id",controllerUsuario.getEdit);
route.post("/usuarioEdit",controllerUsuario.postEdit);
route.get("/usuarioDelete/:id",controllerUsuario.getDelete);



//Controller Animal
//Animal - CRUD
route.get("/animalCreate", controllerAnimal.getCreate);
route.post("/animalCreate", controllerAnimal.postCreate);
route.get("/animalList", controllerAnimal.getList);
route.get("/animalEdit/:id",controllerAnimal.getEdit);
route.post("/animalEdit",controllerAnimal.postEdit);
route.get("/animalDelete/:id",controllerAnimal.getDelete);
