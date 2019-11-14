module.exports = (sequelize, DataTypes) => {
    const Sailor = sequelize.define('sailor', {
        name: {
            type: DataTypes.STRING(45)
        },
        rating: {
            type: DataTypes.INTEGER
        },
        age : {
            type: DataTypes.DOUBLE,
            validate: {
                customAgeValidate(value){
                    if(value >= 80){
                        throw new Error("age must below 80")
                    }
                }
            }
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    Sailor.associate = (models) => {
        Sailor.belongsToMany(models.boat, {through: models.reserve})
    }

    return Sailor
}