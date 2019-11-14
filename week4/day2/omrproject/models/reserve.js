module.exports = (sequelize, DataTypes) => {

    const dateToday = String(new Date()) 

    const Reserve = sequelize.define('reserve', {
        day: {
            type: DataTypes.DATE,
            validate: {
                isAfter: dateToday,
            }
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    return Reserve

  
}