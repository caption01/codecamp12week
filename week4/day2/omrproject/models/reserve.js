module.exports = (sequelize, DataTypes) => {

    const Reserve = sequelize.define('reserve', {
        day: {
            type: DataTypes.DATE
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    return Reserve
}