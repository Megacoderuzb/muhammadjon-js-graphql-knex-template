import "dotenv/config";
import config from "./src/shared/config/index.js";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "postgresql",
    connection: {
      host: config.db.host,
      port: config.db.port,
      database: config.db.name,
      user: config.db.user,
      password: config.db.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      host: config.db.host,
      port: config.db.port,
      database: config.db.name,
      user: config.db.user,
      password: config.db.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      host: config.db.host,
      port: config.db.port,
      database: config.db.name,
      user: config.db.user,
      password: config.db.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },
};
