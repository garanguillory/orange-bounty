module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/citrus_store'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};