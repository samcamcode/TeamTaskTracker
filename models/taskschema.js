const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Task', taskSchema)