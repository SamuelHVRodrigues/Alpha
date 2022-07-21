const { Pool } = require("pg");

// const pool = new Pool({
//     user: "dbmebmaizibkwy",
//     password: "537d95844bb6113f518e396c8f0b12565bacce588fcbc1a876db76eeaf4b94d6",
//     database: "de318r8r0nim2q",
//     host: "ec2-44-199-143-43.compute-1.amazonaws.com",
//     port: 5432
// });

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;