export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },

  admin: {
    autoOpen: false,
    watchIgnoreFiles: ["*/private/*", "*/node_modules/*", "*/documentation/*"],
  },
  // Critical for memory management
  cron: {
    enabled: false,
  },
  graphql: {
    enabled: false,
    shadowCRUD: false,
  },
});
