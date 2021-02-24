const express = require('express');

const app = express();

const morgan = require('morgan'); 
app.use(morgan('tiny'));

app.listen(8000, () => {
    console.log("Server started on PORT : ", port);
})