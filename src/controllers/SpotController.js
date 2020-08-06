const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports = {
    // lista todos os spots
    async index(req, res){
        const spots = await Spot.find();
        return res.json(spots);
    },
    // criar um spot
    async store(req, res) {
        const { filename } = req.file;
        const { restaurante, voto } = req.body;
        const { user_id } = req.headers;

       // let user = await User.findById({ user_id });

        //if(!user){
         //   return res.status(400).json({error:"Usuário não existe!"})
        //}

        let spot = await Spot.findOne({ restaurante });

        if (!spot)
            spot = await Spot.create({ 
                user: user_id,
                imagem: filename,
                restaurante
            });

        return res.json(spot);
    }
};