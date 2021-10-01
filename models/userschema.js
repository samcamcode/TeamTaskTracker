const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    taskList: [
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



// "_id" : ObjectId("6156a55ece2a79fd364a33fb"),
// "name" : "Samuel"

// "_id" : ObjectId("6156a55ece2a79fd364a33fc"),
// "name" : "Camacho"

// "_id" : ObjectId("6156a55ece2a79fd364a33fd"),
// "name" : "SamCam"

// "_id" : ObjectId("6156a55ece2a79fd364a33fe"),
// "name" : "admin"