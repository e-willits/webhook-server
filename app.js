const express = require("express");
const app = express();

app.get('/test', (req, res) => {
    console.log('get request successful');
    res.send({res: 'get request successful'});
})

app.post('/set-channel', (req, res) => {
    console.log('event added to calendar');
    console.log('eventId',req.header('X-Goog-Resource-ID'));
    res.send({msg: 'event created', body: req.body})
})

app.listen(8000, function () {
    console.log("Server is running on localhost 8080");
});