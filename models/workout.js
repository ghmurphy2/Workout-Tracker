const mongoose = require('mongoose');
const {Schema} = mongoose;
// add date to workout, call on id

const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,

    },
    exercises:[{
        type: Schema.Types.ObjectId,
        ref: 'exercises'
    },
],
    duration:{
        type: Number,
        match: [/^[\d]$/, 'Please enter a valid number.'],
    }
});


const workout = mongoose.model('workout', workoutsSchema)

module.exports = workout;