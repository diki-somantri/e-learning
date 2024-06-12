/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("materi", function (table) {
    table.increments("id_materi").primary();
    table.string("nama_materi", 100);
    table.string("thumbnail_materi");
    table.enu("tipe_materi", ["Video", "End Quiz", "Single Quiz", "Summary"]);
    table.timestamps(true, true);
    table
      .integer("id_sub_bab")
      .unsigned()
      .references("id_sub_bab")
      .inTable("sub_bab");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("materi");
};
