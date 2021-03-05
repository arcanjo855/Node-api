const express = require('express')
const app = express()

app.get('/hello-world', (request, response) => {
    return response.json('hello world')
}) 

app.listen(3000, () => console.log('O servidor ta on'))

