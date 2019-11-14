module.exports = (sequelize, DataTypes) => {


    const Boat = sequelize.define('boat', {
        name: {
            type: DataTypes.STRING(45),
            validate: {
                notContains: "boat",
                len: [5,15]
            }
        },
        color: {
            type: DataTypes.STRING(45),
            validate: {
                isIn: {
                    args: ["red", "orange", "green", "blue", "yellow"],
                    msg: "only 5 color allow"
                }
            }
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Boat.associate = (models) => {
        Boat.belongsToMany(models.sailor, {through: models.reserve})
    }

    return Boat
}