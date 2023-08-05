/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("full_name").notNullable();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.string("address");
    table.boolean("is_deleted").defaultTo(false);
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("users");
};
