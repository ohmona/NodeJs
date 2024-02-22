const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.listen(3000, function() {
    console.log('listening on 3000')
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/:name', function(req, res) {
    const {name} = req.params; // only if it's same as param

    if(name == "ohmona") {
        res.json({'name': name, 'level': 10});
    }
    else if(name == "owna") {
        res.json({'name': name, 'level': 20});
    }
    else if(name == "ohmonasti") {
        res.json({'name': name, 'level': 5});
    }
    else {
        res.json({'name': name, 'level': 0});
    }
    console.log('something happend');
});