module.exports = function(sequelize, DataTypes) {
  const Location = sequelize.define("Location", {
    zip_code:    DataTypes.STRING,
    address:     DataTypes.STRING,
    loc_type:    DataTypes.STRING,
    loc_name:    DataTypes.STRING,
    bldng_name:  DataTypes.STRING
  });

  return Location;
};
//inserting set locations into database //app v2 will add efficiency to this table by automating these locations based on new location submissions by admin  
let location1 = Location.build({
  zip_code: 84107,
  address:'6191 State St',
  loc_type: 'Mall',
  loc_name: 'Fashion Place',
  bldng_name: 'null',
});
//Inserting into database
location1.save().complete(function (err) {
if (err) {
  console.log('Error in Inserting Record');
} else {
  console.log('Mall successfully inserted');
}
});

let location2 = Location.build({
  zip_code: 84112,
  address:'201 Presidents Cir',
  loc_type: 'School',
  loc_name: 'University of Utah',
  bldng_name: 'Salt Lake Campus',
});
location2.save().complete(function (err) {
if (err) {
  console.log('Error in Inserting Record');
} else {
  console.log('School successfully inserted');
}
});

