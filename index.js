const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');

const User = require('./models/userschema');
const Task = require('./models/taskschema');

const dbUrl = 'mongodb://127.0.0.1:27017/TeamTaskTracker';
mongoose.connect(dbUrl, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('database connection!')
})

const port = process.env.PORT || 3000;
const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/user', async (req, res) => {
    const tasks = await Task.find({assignedTo: '6156a55ece2a79fd364a33fd'})
    res.render('userHome', {tasks})
})

app.get('/create', async (req, res) => {
    const users = await User.find({})
    res.render('createTask', {users})
})

// POSTS

app.post('/login', async (req, res) => {
    const findUser = await User.find({name: req.body.username})
    if (findUser.length === 0) {
        res.send('user not in db')
    }else if(req.body.username === findUser[0].name && req.body.password === findUser[0].password) {
        res.send('logged on')
    }
})

app.post('/register', async (req, res) => {
    const {username, password, email} = req.body;
    const newUser = await new User({name: username, email, password});
    newUser.save();
    res.send(newUser)
})

app.post('/create', async (req, res) => {
    res.send(req.body)
})





app.listen(port, () => {
    console.log(`open on port ${port}`)
})