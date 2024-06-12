/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("bab", function (table) {
    table.increments("id_bab").primary();
    table.string("nama_bab", 100);
      table.string("thumbnail_bab");
       table.timestamps(true, true);
    table
      .integer("id_mata_pelajaran")
      .unsigned()
      .references("id_mata_pelajaran")
      .inTable("mata_pelajaran");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("bab");
};
