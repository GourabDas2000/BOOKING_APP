const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./src/models/User')
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL).then(() => console.log('Database successfully connected')).catch((err) => console.log(err));
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173',
        'https://booking-app-three-fawn.vercel.app'
    ]
}));


app.post('/register', async(req, res) => {
    const { name, email, password } = req.body;
    try {
        const userDoc = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        });
        res.send(userDoc);
    } catch (e) {
        res.status(422).send('Something went wrong , try again later')
    }
});

app.listen(4000, () => {
    console.log('server is running on port 4000')
});