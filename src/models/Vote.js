const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    voto: Number,
    data: String,
    user: [String],
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }

})

module.exports = mongoose.model('Vote', VoteSchema);