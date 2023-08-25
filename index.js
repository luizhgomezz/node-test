const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const userRouter = require('./src/route/user.route');
const db = require('./src/config/db.conf')

app.use('/user', userRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});
    
    return;
});

console.log(db.dbConfigs);
// db.sync('Banco conectado!');

app.get('/', (req, res) => {
  res.send('Hello NodeTest')
})

// app.get('/:id', (req, res) => {
//     res.json(`Show user id => ${req.params.id}`);
// });

// app.delete('/:id', (req, res) => {
//     res.json(`Delete user id => ${req.params.id}`);
// });

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.json(`Create a new user`);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  console.log(`http://localhost:${port}`)
})