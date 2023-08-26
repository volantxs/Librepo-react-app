const express = require('express');
const cors = require('cors');
const User = require("../util/config.js");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));


app.get('/api', async(req, res) => {
    res.json({message: "Hello from server"});
})


app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`); 
});

