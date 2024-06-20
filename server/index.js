const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./src/models/User')
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL).then(() => console.log('Database successfully connected')).catch((err) => console.log(err));
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173',
        'https://booking-app-three-fawn.vercel.app'
    ],
    credentials: true
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

app.post('/login', async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const passMatch = bcrypt.compareSync(password, user.password);
            if (passMatch) {
                jwt.sign({
                    username: user.name,
                    user_id: user._id
                }, process.env.TOKEN, (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.cookie('Token', token, { httpOnly: true, secure: true, sameSite: 'strict' }).json('verified');
                })
            } else {
                res.status(401).send('Username or password are incorrect');
            }
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send('Internal server error');
    }
});

app.listen(4000, () => {
    console.log('server is running on port 4000')
});