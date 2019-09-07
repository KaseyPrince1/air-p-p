module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    first_name:     DataTypes.STRING,
    last_name:      DataTypes.STRING,
    email_address:  DataTypes.STRING,
    age:            DataTypes.INTEGER,
    gender:         DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.Review);

    User.hasMany(models.Location, {
      as: 'Locations'
    });
  };

  return User;
};

//inserting user info input into user table 
sequelize.sync().success(function () {
  User.create({
    first_name:     $("#first_name").val("").trim(),
    last_name:      $("#last_name").val("").trim(),
    email_address:  $("#email_address").val("").trim(),
    age:            $("#age").val("").trim(),
    gender:         $("#gender").val("").trim(),         
  }).success(function (data){
  console.log(data.values)
 })
});



