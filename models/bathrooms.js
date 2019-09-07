module.exports = function(sequelize, DataTypes) {
    const bathrooms = sequelize.define("bathrooms", {
      bldng_name:   DataTypes.STRING,
      address:      DataTypes.STRING,
      location:     DataTypes.STRING,
      clean_status: DataTypes.INTEGER,
      wait_time:    DataTypes.INTEGER,
      star_rvw:     DataTypes.INTEGER
    });
  
    return bathrooms;
  };
  