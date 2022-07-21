// declaration of variables
// require node modules
const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const cors = require("cors");
require('dotenv').config();

// require components
const middleware = require('./components/middlewares');
const routes = require("./components/routes-db.js");

// declaretion of modules functions and other variables
const app = express()
const PORT = process.env.PORT || 5000;


// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


// REST
app.get('/cookie', (req, res) => {
    if (req.cookies.my_alpha_react_session) {
        jwt.verify(req.cookies.my_alpha_react_session, process.env.PASSPHRASE_JWT, (err, decoded) => {
            res.cookie('my_alpha_react_session', jwt.sign({ email: decoded.email }, process.env.PASSPHRASE_JWT, { expiresIn: '1800s' }), { maxAge: 1800 * 1000, overwrite: true })
            res.status(200).json({ email: decoded.email });
        });
    }
    else {
        res.status(400).json(false);
    }
});

app.post('/cookie', middleware.validateUser, (req, res) => {
    if (!req.cookies.my_alpha_react_session) {
        res.cookie('my_alpha_react_session', jwt.sign({ email: req.body.email }, process.env.PASSPHRASE_JWT, { expiresIn: '1800s' }), { maxAge: 1800 * 1000 })
        res.status(201).json(true);
    }
    else {
        res.status(400).json(false);
    }
});

app.delete('/cookie', (req, res) => {
    if (req.cookies.my_alpha_react_session) {
        res.clearCookie('my_alpha_react_session');
        res.status(201).json(true);
    }
    else {
        res.status(400).json(false);
    }
});

// 
app.post('/register-user', middleware.validateNewUser, (req, res) => {
    const { name, email, password, birth_date, picture } = req.validateNewUser;
    routes.createUser(name, email, password, birth_date, picture);
});

app.post('/login-user', middleware.validateUser, (req, res) => {
    const { email, password } = req.validateUser;
    routes.login(email, password);
});

app.post('/get-user-info', middleware.validateUserEmail, (req, res) => {
    const { email } = req.validateUserEmail;
    res.status(201).json(routes.getUsersByEmail(email));
});

app.put('/update-user-info', middleware.validateUpdateUser, (req, res) => {
    
});

app.delete('/delete-user', middleware.validateUser, (req, res) => {
    const { email, password } = req.validateUser;
    routes.deleteUser(email, password);
});


// ### ROUTES DATABASE ### //

// CREATE
app.post("/create", middleware.validateNewUser, (req, res) => {
    const { name, email, password, birth_date, picture } = req.validateNewUser;
    routes.createUser(name, email, password, birth_date, picture);
});

// READ
app.get("/all-users", (req, res) => {
    routes.getAllUsers();
});

app.get("/user-by-name", (req, res) => {
    const { name } = req.body;
    routes.getUsersByName(name);
});

app.get("/user-by-email", (req, res) => {
    const { email } = req.body;
    routes.getUsersByEmail(email);
});

// UPDATE
app.put("/update-username", (req, res) => {
    const { name, email, password } = req.body;
    routes.updateUserName(name, email, password);
});

app.put("/update-email", (req, res) => {
    const { newEmail, email, password } = req.body;
    routes.updateUserName(newEmail, email, password);
});

app.put("/update-password", (req, res) => {
    const { newPassword, email, password } = req.body;
    routes.updatePassword(newPassword, email, password);
});

app.put("/update-birth-date", (req, res) => {
    const { birth_date, email, password } = req.body;
    routes.updateBirthDate(birth_date, email, password);
});

app.put("/update-picture", (req, res) => {
    const { newPicture, email, password } = req.body;
    routes.updatePicture(newPicture, email, password);
});

// DELETE
app.delete("/delete", (req, res) => {
    const { email, password } = req.body;
    routes.deleteUser(email, password);
});

// Listen Port
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})


// createUser("haha", "haha@email.com", "graviola", "1900-05-15");
// updatePassword("limão", "luan.raabe202@gmail.com", "banana");
// getAllUsers();
// getUsersByName("Abacate da Silvis");
// getUsersByEmail("yete.abuna@gmail.com");
// deleteUser("haha@email.com", "graviola");