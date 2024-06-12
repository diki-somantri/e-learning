/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("mode_pembelajaran", function (table) {
    table.increments("id_mode_pembelajaran").primary();
    table.string("nama_mode_pembelajaran", 100);
      table.text("deskripsi_mode_pembelajaran");
       table.timestamps(true, true);
    table
      .integer("id_kelas")
      .unsigned()
      .references("id_kelas")
      .inTable("kelas");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("mode_pembelajaran");
};
