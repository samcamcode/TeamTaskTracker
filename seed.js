const mongoose = require('mongoose');
const {inspect} = require('util');
const Task = require('./models/taskschema');
const User = require('./models/userschema');


const dbUrl = 'mongodb://localhost:27017/TeamTaskTracker';
mongoose.connect(dbUrl, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('database connection!')
})

const user = async() => {
    const users = await User.find({})
    console.log(users)
}

user()

// const findTask = async() => {
//     const task = await Task.findById('6156a7f9cc0aa2efa56c7011').populate('createdBy')
//     console.log(task)
// }
// findTask()

// const findUser = async () => {
//     const user = await User.findById('6156a55ece2a79fd364a33fd').
//     populate('taskList.task')
//     console.log(inspect(user, {depth:null}))
// }
// findUser()

// const createTask = async() => {
//     const newTask = await new Task({
//         task: 'now lets see if this works',
//         createdBy: '6156a55ece2a79fd364a33fe',
//         assignedTo: '6156a55ece2a79fd364a33fd'
//     })
//     const user = await User.findById('6156a55ece2a79fd364a33fd');
//     const taskObj = {
//         task: newTask._id,
//         assignedBy: newTask.createdBy,
//         createdBy: newTask.createdBy
//     }
//     user.taskList.push(taskObj);
//     user.save()
//     newTask.save()
//     console.log(user)
//     console.log(newTask)
// }
// createTask()

// const user1 = () => {
//     const user = new User({
//         name: 'Samuel',
//         email: 'samuel@gmail.com',
//         password: '12345',
//         tasks: []
//     })
//     user.save();
// }

// const user2 = () => {
//     const user = new User({
//         name: 'Camacho',
//         email: 'camacho@gmail.com',
//         password: '12345',
//         tasks: []
//     })
//     user.save();
// }

// const user3 = () => {
//     const user = new User({
//         name: 'SamCam',
//         email: 'samcam@gmail.com',
//         password: '12345',
//         tasks: []
//     })
//     user.save();
// }

// const user4 = () => {
//     const user = new User({
//         name: 'admin',
//         email: 'admin@gmail.com',
//         password: '12345',
//         tasks: []
//     })
//     user.save();
// }

// user1()
// user2()
// user3()
// user4()

// mongoose.connection.close();