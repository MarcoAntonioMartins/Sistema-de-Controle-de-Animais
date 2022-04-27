const Animal = require('../models/models_nosql/animal');

module.exports = {
    async getAnimais(req, res) {
        const animais = await Animal.find();
        return res.json({ "data": { "status": "success", animais } });
    },
    async getAnimalById(req, res) {
        const { id } = req.params;
        animal = await Animal.findById(id, (err, animal) => {
            if (err) {
                return res.status(204).json();
            }
        });
        return res.json({ "data": { "status": "success", animal } });
    },
    async postAnimal(req, res) {
        console.log(req.body);
        const { nome, ingredientes, preparo } = req.body;
        const animal = new Animal({ nome, ingredientes, preparo })
        await animal.save().then((animal) => {
            return res.json({ "data": { "status": "success", animal } });
        });
    },
    async putAnimal(req, res) {
        await Animal.findOneAndUpdate({ _id: { $in: req.params.id } }, req.body).then((animal) => {
            return res.json({ "data": { "status": "success", animal } });
        });
    },
    async deleteAnimal(req, res) {
        await Animal.findOneAndRemove({ _id: { $in: req.params.id } }).then((animal) => {
            return res.json({ "data": { "status": "success", animal } });
        });
    },
    async error(req, res) {
        return res.status(404).json();
    }
}
