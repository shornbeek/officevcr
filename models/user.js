module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name:{ 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }},
        email:{ 
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len: [1],
                isEmail : true
            }},

    });
    return User;
}