/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("sub_bab", function (table) {
    table.increments("id_sub_bab").primary();
    table.string("nama_sub_bab", 100);
    table.string("thumbnail_sub_bab");
      table.boolean("is_free");
       table.timestamps(true, true);
    table.integer("id_bab").unsigned().references("id_bab").inTable("bab");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("sub_bab");
};
