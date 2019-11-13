module.exports = (sequelize, DataTypes) => {

    const Post = require('./post.js')

    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(45),
            allowNull: true
        }
    },{
        freezeTableName: true,
        timestamps: false
    })

   User.hasMany(Post, {foreignKey: 'userId'})

    return User
}