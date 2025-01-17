require("../mongoose/mongo_db");
const mongoose = require('mongoose');
const slugify = require('slugify');
const { Schema } = mongoose;

const deviceSchema = new Schema({
    nome     : {type: String, required: true, unique: true},
    slug     : {type: String, unique: true},  
    kwh      : {type: Number, required: true},
    corrente : {type: Number, required: true},
    voltagem : {type: Number, required: true},
    fp       : {type: Number, required: true}
});

deviceSchema.pre('save', function(next) {
    if (this.nome) {
        this.slug = slugify(this.nome, { lower: true, strict: true });
    }
    next();
});

const Device = mongoose.model('Device', deviceSchema, 'devices');

module.exports = Device;