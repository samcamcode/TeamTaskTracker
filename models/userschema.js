const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    tasks: [
        {
            task: {
                type: Schema.Types.ObjectId,
                ref: 'Task'
            },
            assignedBy: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            createdBy: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ]
})

module.exports = mongoose.model('User', userSchema);



// "_id" : ObjectId("61556faf1cb8b81fac95c601"),
// "name" : "Samuel"

// "_id" : ObjectId("61556faf1cb8b81fac95c602"),
// "name" : "Camacho"

// "_id" : ObjectId("61556faf1cb8b81fac95c603"),
// "name" : "SamCam"

// "_id" : ObjectId("61556faf1cb8b81fac95c6014"),
// "name" : "admin"