const { Pool } = require('pg')

const connectionString = 'postgresql://postgres:12345@localhost:5432/alfa'
const pool = new Pool({connectionString: connectionString})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
