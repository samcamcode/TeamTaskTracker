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
            CreatedBy: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        }
    ]
})

module.exports = mongoose.model('User', taskSchema)