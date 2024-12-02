const express = require('express');
const app = express();

app.set('port', 3000);

app.use((req, res, nex) => {
    const userAgent = req.header('User-Agent');
    const paramName = req.query.name;
    const paramId = req.query.id;

    res.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    res.write('<style> body { padding: 20px 200px; } h1 {color: #6767db;} div {color: green;}</style>');
    res.write('<h1>Express 서버에서 응답한 결과</h1>');
    res.write(`<div><p>User-Agent: ${userAgent}</p></div>`);
    res.write(`<div><p>Param Name: ${paramName}</p></div>`);
    res.write(`<div><p>Param ID: ${paramId}</p></div>`);
    res.end();
})

app.listen(app.get('port'), () => {
    console.log(`Express server is running at http://localhost:${app.get('port')}`);
});

