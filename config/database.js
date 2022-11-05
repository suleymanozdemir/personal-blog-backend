module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "personal-blog-DB"),
      user: env("DATABASE_USERNAME", "suleymanozdemir"),
      password: env("DATABASE_PASSWORD", "7387381"),
      //ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
