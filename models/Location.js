module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define("Location", {
    zip_code: DataTypes.STRING,
    address: DataTypes.STRING,
    loc_type: DataTypes.STRING,
    loc_name: DataTypes.STRING,
    bldng_name: DataTypes.STRING
  });

  return Location;
};
