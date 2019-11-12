module.exports = (sequelize, DataTypes) => {

    const Reserve = require('./reserve.js')(sequelize, DataTypes)

    const Sailor = sequelize.define('sailor', {
        name: {
            type: DataTypes.STRING(45)
        },
        rating: {
            type: DataTypes.INTEGER
        },
        age : {
            type: DataTypes.DOUBLE
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Sailor.associate = (models) => {
        Sailor.belongsToMany(models.boat, {through: Reserve})
    }

    return Sailor
}