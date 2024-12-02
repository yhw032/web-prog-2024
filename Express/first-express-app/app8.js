const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const path = require('path');
const static = require('serve-static');

app.set('port', 3000);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(
        `
        <h1>Express 서버에서 응답한 결과</h1>
        <div><p>Param ID: ${paramId}</p></div>
        <div><p>Param Password: ${paramPassword}</p></div>
        <br><br>
        <a href="/login1.html">로그인 페이지로 돌아가기</a>
        `
    )
});

app.listen(app.get('port'), () => {
    console.log(`Express server is running at http://localhost:${app.get('port')}`);
});

