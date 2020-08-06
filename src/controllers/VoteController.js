const Vote = require('../models/Vote');

module.exports = {
    // lista todos os votos
    async index(req, res) {

        const vote = await Vote.find();
        return res.json(vote);
    },
    // criar um voto
    async store(req, res) {
        const spot = req.body.spotId;
        const user = req.body.user;
        const data = req.body.date;

        let userVoto = await Vote.findOne({ user});
        let voto = null;
        if (userVoto.data !== data) {// valida se o usuario votou no dia
            
            voto = await Vote.findOne({ spot });
            if (!voto) {
                voto = await Vote.create({
                    user: user,
                    spot: spot,
                    voto: req.body.voto,
                    data: data
                })
            }
            
        }

        return res.json(voto);
    },
    // atualiza registro
    async update(req, res) {
        let registroAtualizado = null;
        const spot = req.body.idSpot;
        const user = req.body.idUser;
        const data = req.body.date;

        let userVoto = await Vote.findOne({user});
        if (userVoto.data != data) {
            if(!userVoto){// valida se o usuario ja votou
                let voto = await Vote.findOne({ spot });
                const dados = {
                    voto: req.body.voto,
                    $push: {user : user}// comando para acrescentar valores a um array no banco mongodb
                }
                registroAtualizado = await Vote.findByIdAndUpdate({ _id: voto.id }, dados, { new: true });
            }
        }

        return res.json(registroAtualizado);
    }
};