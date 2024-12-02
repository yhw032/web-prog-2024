const express = require('express');
const app = express();

app.set('port', 3000);
app.use((req, res) => {
    res.status(200).send('<h1>Welcome</h1>');
});

app.listen(app.get('port'), () => {
    console.log(`Express server is running at http://localhost:${app.get('port')}`);
});

