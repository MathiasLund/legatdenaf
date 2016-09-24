"use strict"

let express = require('express')
let app = express()

app.use(express.static('public', { maxAge: 86400000 }));

const PORT = 9000
app.listen(PORT, () => console.log('Listening on', PORT))
