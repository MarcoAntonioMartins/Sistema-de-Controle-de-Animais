const express = require('express');
const controllerAnimal = require('../controllers/controllerAnimal');
const controllerUsuario = require('../controllers/controllerUsuario');

const multer = require('multer');
const route = express.Router();

module.exports = route;

//Home
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/")
    },
    filename: (req, file, cb) => {
        req.imageName = req.body.nome + '.jpg'
        cb(null, req.imageName)
    },
})
const upload = multer({ storage })


route.get("/home", function (req, res) {
    res.render('home');
});

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
route.get("/usuarioEdit/:id", controllerUsuario.getEdit);
route.post("/usuarioEdit", controllerUsuario.postEdit);
route.get("/usuarioDelete/:id", controllerUsuario.getDelete);


//Controller Animal
//Animal - CRUD
route.get("/animalCreate", controllerAnimal.getCreate);
route.post("/animalCreate",upload.single('imagem'), controllerAnimal.postCreate);
route.get("/animalList", controllerAnimal.getList);
route.get("/animalEdit/:id", controllerAnimal.getEdit);
route.post("/animalEdit",upload.single('imagem'), controllerAnimal.postEdit);
route.get("/animalDelete/:id", controllerAnimal.getDelete);


//ControllerAPI
// route.get("/api/animal/:id", controllerAPI.getAnimalById);
// route.get("/api/animais", controllerAPI.getAnimais);
// route.post("/api/animal", controllerAPI.postAnimal);
// route.put('/api/animal/:id', controllerAPI.putAnimal);
// route.delete('/api/animal/:id', controllerAPI.deleteAnimal);