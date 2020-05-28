const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
    async store(req,res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk( user_id );

        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }

        const [ tech ] = await Tech.findOrCreate({
            where: { name }
        })

        await user.addTech( tech );
        
        return res.json( tech );
    },
    async show(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: "techs"}
        })

        return res.json( user.techs );

    },
    async delete(req, res){
        const { user_id } = req.params;
        const { name } = req.body;

        const user = await User.findByPk( user_id );

        if(!user){
            res.status(400).json({ error: "User not found" });
        }

        const tech = await Tech.findOne({
            where: { name }
        });

        await user.removeTech(tech);

        res.json();
    }
}