export default () => ({
  port: process.env.API_PORT || 3001,
  host: process.env.API_HOST,
  db: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
  },
});
