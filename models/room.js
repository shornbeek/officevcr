module.exports = (sequelize, DataTypes) => {
    var Room = sequelize.define("Room", {
        roomID:{ 
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }},
        userID:{ 
            type: DataTypes.INTEGER,
            allowNull: false,
           },

    });
    Room.associate = function(models) {
        // in a many-to-many relationship, where an author can belong to many posts and vice versa, we will actually need a third table to store all of the possibilities. the "through" property will create that third table for us.
        Room.belongsToMany(models.User, {
          through: "roomandusers"
        });
      };
    
      return Room;
}
