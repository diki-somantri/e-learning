/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("mata_pelajaran", function (table) {
    table.increments("id_mata_pelajaran").primary();
    table.string("nama_mata_pelajaran", 100);
      table.string("thumbnail_mata_pelajaran");
       table.timestamps(true, true);
    table
      .integer("id_mode_pembelajaran")
      .unsigned()
      .references("id_mode_pembelajaran")
      .inTable("mode_pembelajaran");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("mata_pelajaran");
};
