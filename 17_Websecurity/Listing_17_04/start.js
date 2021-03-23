const express = require('express');
const cors = require('cors');
const app = express();
const whitelist = ['https://example.com', 'https://www.example.com']; 
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
}
app.use(cors(corsOptions));
app.get('/examples', (request, response) => {
    res.json({ msg: 'Hello World mit CORS' })
})