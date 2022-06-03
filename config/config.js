require('dotenv').config()
module.exports = {
  development: {
    database: 'the_comic_bookshelfv2db',
    dialect: 'postgres'
  },
  test: {
    database: 'the_comic_bookshelfv2db',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
