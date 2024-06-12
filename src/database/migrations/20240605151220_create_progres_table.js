/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("progres", function (table) {
    table.increments("id_progres").primary();
    table.integer("id_user").unsigned().references("id_user").inTable("user");
    table
      .integer("id_materi")
      .unsigned()
      .references("id_materi")
      .inTable("materi");
    table.boolean("status_progres");
    table.integer("xp");
      table.integer("gold");
       table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("progres");
};
