const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    imagem : String,
    restaurante: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    }
});

SpotSchema.virtual('thumbnail_url').get(function(){
    return `${process.env.PORT}/files/${this.imagem}`;
});

module.exports = mongoose.model('Spot', SpotSchema);
