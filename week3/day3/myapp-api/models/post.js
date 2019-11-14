module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define('post', {
        date: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        },
        imageUrl: {
            type: DataTypes.STRING
        },
        imageText: {
            type: DataTypes.STRING
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

    return Post
}