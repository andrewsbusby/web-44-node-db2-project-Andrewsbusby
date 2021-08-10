exports.up = function (knex) {
  return knex.shcema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin').notNullable().unique();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.numeric('mileage').notNullable();
    tbl.string('title');
    tbl.string('transmission');
  })
};

exports.down = function (knex) {
  return knex.shcema.dropTableIfExists('cars');
};
