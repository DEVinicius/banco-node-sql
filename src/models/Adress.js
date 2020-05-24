const { Model, DataTypes } = require('sequelize');

class Adress extends Model{
    static init(sequelize){
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.STRING,
            user_id: DataTypes.INTEGER
        },
        {
            sequelize
        });
    }

    static associate(models){
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Adress;