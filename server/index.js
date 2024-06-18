const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello from backend');
});

app.listen(4000, () => {
    console.log('server is running on port 4000')
});