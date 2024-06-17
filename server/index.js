const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.json('Hello from backend');
})

app.listen(4000, () => {
    console.log('server is running on port 4000')
});