const Adress = require('../models/Adress');
const User = require('../models/User');

module.exports = {
    async store(req, res){
        
        const { user_id } = req.params;
        const { zipcode, street, number} = req.body;

        const user = await User.findByPk(user_id);
        
        if(!user){
            return res.status(400).json({error: "User not found"});
        }
        else{
            const adress = await Adress.create({zipcode, street, number, user_id});
            return res.json(adress);
        }
        
    },
    async show(req, res){
        const adress = await Adress.findAll();
        return res.json(adress);
    },
    async showOne(req, res){
        const { user_id }= req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'adresses' }
        });

        const adresses = await Adress.findAll({ where: { user_id } });
        return res.json(user); 
    }
}