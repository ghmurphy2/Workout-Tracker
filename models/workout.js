const mongoose = require('mongoose');
const {Schema} = mongoose;
// add date to workout, call on id

const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,

    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'exercises'
    },
],
    totalDuration:{
        type: Number,
        
    }
});


const Workouts = mongoose.model('workouts', workoutsSchema)

module.exports = Workouts;