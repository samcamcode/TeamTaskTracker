const mongoose = require('mongoose');
const Task = require('./models/taskschema');
const User = require('./models/userschema');


const dbUrl = 'mongodb://localhost:27017/TeamTaskTracker';
mongoose.connect(dbUrl, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('database connection!')
})


const findTask = async () => {
    const task = await (await (await Task.findById('61555d912c36ff8f5f60acdd')).populate('createdBy')).populate('assignedTo');
    console.log(task)
    console.log(task.task)
    console.log(task.createdBy.name)
    console.log(task.assignedTo.name)
}
// findTask()

// const findUser = async() => {
//     const user = await (await User.findById('615558c78ccb77fe75e54e2c'))
//     .populate({
//         path: 'tasks.task',
//         model: 'User',
//         populate:{
//             path:'createdBy',
//             model: 'Task'
//         }
//     })
//     // const user = await User.findById('615558c78ccb77fe75e54e2c')
//     // const obj = {
//     //     task: '61555d912c36ff8f5f60acdd',
//     //     assignedBy: '615558c78ccb77fe75e54e2d',
//     //     createdBy: '615558c78ccb77fe75e54e2d'
//     // }
//     // user.tasks.push(obj);
//     // user.save()
//     console.log(user)
// }
// findUser()


// const task1 = () => {
//     const task = new Task({
//         task: 'created by samuel for samuel',
//         createdBy: '615558c78ccb77fe75e54e2a',
//         assignedTo: '615558c78ccb77fe75e54e2a'
//     })
//     task.save();
// }

// const task2 = () => {
//     const task = new Task({
//         task: 'created by camacho for samuel',
//         createdBy: '615558c78ccb77fe75e54e2b',
//         assignedTo: '615558c78ccb77fe75e54e2a'
//     })
//     task.save();
// }

// const task3 = () => {
//     const task = new Task({
//         task: 'created by admin for samcam',
//         createdBy: '615558c78ccb77fe75e54e2d',
//         assignedTo: '615558c78ccb77fe75e54e2c'
//     })
//     task.save();
// }

// const task4 = () => {
//     const task = new Task({
//         task: 'created by admin for admin',
//         createdBy: '615558c78ccb77fe75e54e2d',
//         assignedTo: '615558c78ccb77fe75e54e2d'
//     })
//     task.save();
// }

// task1()
// task2()
// task3()
// task4()


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