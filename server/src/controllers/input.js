const Input = require('../models/input');


class InputModule {
    constructor() { }

    async getData(req, res) {
        try {
          const results = await Input.find({});
            return res.status(201).send(results);
        } catch (error) {
            return res.status(500).send('Error occured!!!' + error);
        }
    }

    async saveData(req, res) {
        const inputs = new Input(req.body);
        try {
            await inputs.save();
            return res.status(201).send(inputs);
        } catch (error) {
            return res.status(500).send('Error occured!!!' + error);
        }
    }

}

module.exports = new InputModule();