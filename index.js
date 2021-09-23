const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');

const Task = require('./models/taskschema');

// const dbUrl = 'mongodb://127.0.0.1:27017/TeamTaskTracker';
// mongoose.connect(dbUrl, {useNewUrlParser: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('database connection!')
// })

const port = process.env.PORT || 3000;
const app = express();

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));



app.get('/', (req, res) => {
    res.render('index')
})

// const addTask = async() => {
//     const task = await new Task({
//         task: 'eat',
//         createdBy: 'sam',
//         assignedTo: 'someone'
//     })
//     await task.save()
// }
// addTask()

app.listen(port, () => {
    console.log(`open on port ${port}`)
})