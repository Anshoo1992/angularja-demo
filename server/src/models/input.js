const mongoose = require('mongoose');


//Model creation 
const inputSchema = new mongoose.Schema({
    firstInput: {
        type: Number,
        default: 0,
        validate(val) {
            if (val < 0) throw new Error('Invalid Number');
        }
    },
    secondInput: {
        type: Number,
        default: 0,
        validate(val) {
            if (val < 0) throw new Error('Invalid Number');
        }
    },
    result: {
        type: Number,
        default: 0,
        validate(val) {
            if (val < 0) throw new Error('Invalid Number');
        }
    }
},{
    timestamps:true
});


const Inputs = mongoose.model('Inputs', inputSchema);


module.exports = Inputs;