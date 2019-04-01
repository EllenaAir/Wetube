const express = require('express')
const app = express()

const PORT = 4000;

function handleListening() {
    console.log(`istening on: http://localhost:${port}`);
}

app.listen(PORT, handleListening);