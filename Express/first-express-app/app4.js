const express = require('express');
const app = express();

app.set('port', 3000);


app.get('/', (req, res, next) => {
    res.status(200).send('<h1>Welcome --- from Root</h1>');
});

app.get('/login', (req, res, next) => {
    res.status(200).send('<h1>Welcome --- from Login</h1>');
});

app.listen(app.get('port'), () => {
    console.log(`Express server is running at http://localhost:${app.get('port')}`);
});

