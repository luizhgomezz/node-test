const User = require('../model/user.model');

const endpoints = {
    index,
    show
}

async function index(req, res, next) {
    await User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20),
    });

    const users = await User.findAll();

    console.log(users)

    res.json( await 'Index Users');
}

async function show(req, res, next) {
    res.json( await `Show user ${req.params.id}`);
}

module.exports = endpoints;