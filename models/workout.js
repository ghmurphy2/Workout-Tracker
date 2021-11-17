const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter an exercise type',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter an exercise name',
      },
      duration: {
        type: Number,
        required: 'Enter an exercise duration in minutes',
      },
      weight: {
        type: Number,
        match: [/^[\d]$/, 'Please enter a valid number.'],
      },
      reps: {
        type: Number,
        match: [/^[\d]$/, 'Please enter a valid number.'],
      },
      sets: {
        type: Number,
        match: [/^[\d]$/, 'Please enter a valid number.'],
      },
      distance: {
        type: Number,
        match: [/^[\d]$/, 'Please enter a valid number.'],
      },
    },
  ],
});
const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;