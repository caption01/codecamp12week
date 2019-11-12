module.exports = (sequelize, DataTypes) => {

    const Reserve = require('./reserve.js')(sequelize, DataTypes)

    const Boat = sequelize.define('boat', {
        name: {
            type: DataTypes.STRING(45)
        },
        color: {
            type: DataTypes.STRING(45)
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Boat.associate = (models) => {
        Boat.belongsToMany(models.sailor, {through: Reserve})
    }

    return Boat
}