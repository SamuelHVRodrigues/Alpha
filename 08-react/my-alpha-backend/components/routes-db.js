const express = require('express');
// const res = require('express/lib/response');
const app = express();
const { Pool } = require("pg");
// const client = require('pg/lib/native/client');

app.use(express.json());
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});


// CREATE
async function createUser(name, email, password, birth_date, picture) {
    try {
        if(picture === false) picture = null;
        const client = await pool.connect();
        const sql = "INSERT INTO profiler (name, email, password, birth_date, picture, created_at) VALUES ($1, $2, $3, $4, $5, $6)";
        const values = [name, email, password, birth_date, picture, dateNow()];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
} 

// READ
async function getAllUsers() {
    try {
        const client = await pool.connect();
        const sql = `SELECT * FROM profiler WHERE deleted = false`;     // TROCAR "*" POR "name" (e email?)
        const result = await client.query(sql);
        return result
    } catch (e) {
        console.log(e);
        return e;
    }
}

async function getUsersByName(name) {
    try {
        const client = await pool.connect();
        const sql = "SELECT * FROM profiler WHERE name = $1 AND deleted = false";      // TROCAR "*" POR "name" (e email?)
        const values = [name];
        const result = await client.query(sql, values);
        return res.status(201).json(result);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
}

async function getUsersByEmail(email) {
    try {
        const client = await pool.connect();
        const sql = "SELECT name, email, birth_date, picture FROM profiler WHERE email = $1 AND deleted = false";      // TROCAR "*" POR "name, email"
        const values = [email];
        const result = await client.query(sql, values);
        return result;
    } catch (e) {
        console.log(e);
    }
}

async function login(email, password) {
    try {
        const client = await pool.connect();
        const sql = "SELECT * FROM profiler WHERE email = $1 AND password = $2 AND deleted = false";      // TROCAR "*" POR "name, email"
        const values = [email, password];
        const result = await client.query(sql, values);
        return res.status(201).json(result);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
}

// UPDATE
async function updateUserName(name, email, password) {
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET name = $1, updated_at = $2 WHERE email = $3 AND password = $4 AND deleted = false";
        const values = [name, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
}

async function updateEmail(newEmail, email, password) {
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET email = $1, updated_at = $2 WHERE email = $3 AND password = $4 AND deleted = false";
        const values = [newEmail, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
}

async function updatePassword(newPassword, email, password) {
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET password = $1, updated_at = $2 WHERE email = $3 AND password = $4 AND deleted = false";
        const values = [newPassword, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
}

async function updateBirthDate(birth_date, email, password) {
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET birth_date = $1, updated_at = $2 WHERE email = $3 AND password = $4 AND deleted = false";
        const values = [birth_date, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
}

async function updatePicture(newPicture, email, password) {
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET picture = $1, updated_at = $2 WHERE email = $3 AND password = $4 AND deleted = false";
        const values = [newPicture, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
}

// async function updateUserInfo(name, email, password, birth_date, picture) {
//     try {
//         const client = await pool.connect();
//         const sql =  "UPDATE profiler SET name = $1, em"
//     } catch (e) {
//         console.log(e);
//     }
// }

// DELETE

async function deleteUser(email, password) {
    try {
        const sql = "UPDATE profiler SET deleted = $1, deleted_at = $2 WHERE email = $3 AND password = $4";
        const values = [true, dateNow(), email, password];
        await pool.query(sql, values);
    } catch (e) {
        console.log(e);
    }
}

function dateNow() {
    const tempo = Date.now();
    const today = new Date(tempo);
    return `${today.getYear() + 1900}-${today.getMonth()}-${today.getDate()};`
}

module.exports = { createUser, getAllUsers, getUsersByName, getUsersByEmail, login, updateUserName, updateEmail, updatePassword, updateBirthDate, updatePicture, deleteUser }


/*
// CREATE           // Fazer a reativação da conta caso já exista uma conta desativada com o mesmo email.
app.post("/create", (req, res) => {
    async function create() {
        const { name, email, password, birth_date, picture } = req.body;
        try {
            const client = await pool.connect();
            const sql = `INSERT INTO users (name, email, password, birth_date, picture, created_at) VALUES ($1, $2, $3, $4, $5, $6);`;
            const values = [name, email, password, birth_date, picture, dateNow()];
            await client.query(sql, values);
        } catch (e) {
            console.log(e);
        }
    }
});


// READ
app.get("/all-users", async (req, res) => {
    try {
        const client = await pool.connect();
        const sql = "SELECT * FROM users WHERE deleted = false;";
        const users = await client.query(sql);
        res.json(users.rows);
    } catch (e) {
        console.log(e);
    }
})

app.get("/user-by-name", async (req, res) => {
    const { name } = req.body;
    try {
        const client = await pool.connect();
        const sql = "SELECT * FROM profiler WHERE name = $1 AND deleted = false;";
        const value = [name];
        const user = await client.query(sql, value);
        res.json(user.rows);
    } catch (e) {
        console.log(e);
    }
})

app.get("/user-by-email", async (req, res) => {
    const { email } = req.body;
    try {
        const client = await pool.connect();
        const sql = "SELECT * FROM profiler WHERE email = $1 AND deleted = false;";
        const value = [email];
        const user = await client.query(sql, value);
        res.json(user.rows);
    } catch (e) {
        console.log(e);
    }
})


// UPDATE
app.put("/update-username", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET name = $1, updated_at = $2 WHERE email = $3 AND password = $4 AND deleted = false;";
        const values = [name, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
})

app.put("/update-password", async (req, res) => {
    const { newPassword, email, password } = req.body;
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET password = $1, updated_at = $2 WHERE email = $3 AND password = $4 AND deleted = false;";
        const values = [newPassword, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
})

app.put("/update-birth-date", async (req, res) => {
    const { birth_date, email, password } = req.body;
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET birth_date = $1, updated_at = $2 WHERE email = $3 AND password = $4 AND deleted = false;";
        const values = [birth_date, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
})

app.put("/update-picture", async (req, res) => {
    const { newPicture, email, password } = req.body;
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET picture = $1, updated_at = $2 WHERE email = $3 AND password = $4 AND deleted = false;";
        const values = [newPicture, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
})


// DELETE
app.delete("/delete", async (req, res) => {
    const { email, password } = req.body;
    try {
        const client = await pool.connect();
        const sql = "UPDATE profiler SET deleted = $1, deleted_at = $2 WHERE email = $3 AND password = $4";
        const values = [true, dateNow(), email, password];
        await client.query(sql, values);
    } catch (e) {
        console.log(e);
    }
})
*/
