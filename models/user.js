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
    User.associate = function(models) {
        // in a many-to-many relationship, where an author can belong to many posts and vice versa, we will actually need a third table to store all of the possibilities. the "through" property will create that third table for us.
        User.belongsToMany(models.Room, {
          through: "roomandusers"
        });
      };
    
      return User;
    };

