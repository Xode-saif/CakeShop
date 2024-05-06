require('./db/connect')
const express = require('express');
const app = express();
require('dotenv').config();
const userroute = require('./routes/route');
const cors = require('cors');
const bodyparser = require('body-parser');


app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/user", userroute);
app.use(express.static('public/photos'));

app.get('/', (req, res) => {
    res.send("hello world")
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`listening on port ${process.env.PORT}`);
})