module.exports = (sequelize, DataTypes) => {

    const Comment = sequelize.define('comment', {
        date: {
            type: DataTypes.DATE
        },
        text: {
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    return Comment
}