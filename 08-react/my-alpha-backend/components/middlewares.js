const isBase64 = require('is-base64');

const validateEmail = (email) => {
    const regexEmail = new RegExp("^([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'+/-9=?A-Z^-~-]+(\.[!#-'+/-9=?A-Z^-~-]+)|\[[\t -Z^-~]*])$");
    if (regexEmail.test(email)) {
        console.log('-email: True');
        return email;
    }
    else {
        console.log('-email: False');
        return false;
    }
};

const validatePassword = (password) => {
    const regexPassword = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");
    if (regexPassword.test(password)) {
        console.log('-password: True');
        return password;
    }
    else {
        console.log('-password: False');
        return false;
    }
};

const validateBirth = (birth_date) => {
    //const regexBirth = new RegExp("\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])");
    const yyyy = new RegExp('[1-2][0-9][0-9][0-9]');
    const mm = new RegExp('0[1-9]|1[0-2]');
    const dd = new RegExp('0[1-9]|[12][0-9]|3[01]');

    if (birth_date[4].includes('-') && birth_date[7].includes('-')) {
        birth_date = birth_date.split('-')

        if (yyyy.test(birth_date[0]) && mm.test(birth_date[1]) && dd.test(birth_date[2])) {
            console.log('-birth_date: True');
            return birth_date;
        }
    }
    else {
        console.log('-birth_date: False');
        return false;
    }
};

const validatePicture = (picture) => {
    if (isBase64(picture)) {
        console.log('-picture: True');
        return picture;
    }
    else {
        console.log('-picture: False');
        return false;
    }
}

const validateNewUser = (req, res, next) => {
    console.log('(start) New User Validate');
    const obj = req.body;

    const validObj = {
        name: obj.name,
        email: validateEmail(obj.email),
        password: validatePassword(obj.password),
        birth_date: validateBirth(obj.birth_date),
    }

    if (validObj.email && validObj.password && validObj.birth_date) {
        console.log('(end) New User is True');
        req.validateNewUser = validObj;
        return next();
    }
    else {
        console.log('(end) New User is false');
        req.validateNewUser = false;
        res.status(400).json({ error: 'Something is false!', validObj: validObj });
        return res.end();
    }
};

const validateUser = (req, res, next) => {
    console.log('(start) User Validate');
    const obj = req.body;

    const validObj = {
        email: validateEmail(obj.email),
        password: validatePassword(obj.password)
    }

    if (validObj.email && validObj.password) {
        console.log('(end) User is True');
        req.validateUser = validObj;
        return next();
    }
    else {
        console.log('(end) User is False');
        req.validateUser = false;
        res.status(400).json({ error: 'Something is false!', validObj: validObj });
        return res.end();
    }
};

const validateUserEmail = (req, res, next) => {
    console.log('(start) User Email Validate');
    const obj = req.body;

    const validObj = {
        email: validateEmail(obj.email),
    }

    if (validObj.email) {
        console.log('(end) User Email is True');
        req.validateUserEmail = validObj;
        return next();
    }
    else {
        console.log('(end) User Email is False');
        req.validateUserEmail = false;
        res.status(400).json({ error: 'Something is false!', validObj: validObj });
        return res.end();
    }
};

const validateUpdateUser = (req, res, next) => {
    console.log('(start) Update User Validate');
    const obj = req.body;

    const validObj = {
        email: validateEmail(obj.email),
        password: validatePassword(obj.password),
        name: obj.name,
        newEmail: validateEmail(obj.newEmail),
        newPassword: validatePassword(obj.newPassword),
        birth_date: validateBirth(obj.birth_date),
        picture: validatePicture(obj.picture),
    }

    if ((validObj.email && validObj.password) && (validObj.name || validObj.newPassword || validObj.birth_date || validObj.picture)) {
        console.log('(end) Update User is True');
        req.validateUpdateUser = validObj;
        return next();
    }
    else {
        console.log('(end) Update User is false');
        req.validateUpdateUser = false;
        res.status(400).json({ error: 'Something is false!', validObj: validObj });
        return res.end();
    }
};


module.exports = { validateNewUser, validateUser, validateUserEmail, validateUpdateUser };