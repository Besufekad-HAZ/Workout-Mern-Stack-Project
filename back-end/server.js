require('dotenv').config();

const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our API!'
    });
})


// listen for requests
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port {process.env.PORT}`);
});


