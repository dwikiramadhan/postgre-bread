const { Pool } = require('pg')

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'mamakbapakayu',
  database: 'data_type',
  port: 5432,
})

module.exports = pool