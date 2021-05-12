const fs = require('fs');

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: env("DATABASE_CLIENT"),
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: {
          ca: fs.readFileSync(`${__dirname}/ca-certificate-shaunmcnamee-database.crt`).toString(),
        },
      },
      options: {
        ssl: true
      },
    },
  },
});
