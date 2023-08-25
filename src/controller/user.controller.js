const endpoints = {
    index,
    show
}

async function index(req, res, next) {
    res.json( await 'Index Users');
}

async function show(req, res, next) {
    res.json( await `Show user ${req.params.id}`);
}

module.exports = endpoints;