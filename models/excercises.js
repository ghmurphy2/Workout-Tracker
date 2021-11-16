const mongoose = require('mongoose');
const { Schema } = mongoose;

const exercisesSchema = new Schema({
  type: {
    type: String,
    trim: true,
    validate: [({ length }) => length < 35, 'Type name too long.'],
  },
//   validate each entry, name length and integer entry
  name: {
      type: String,
      trim: true,
      validate: [({length}) => length < 100, '{VALUE} is too long, please name this exercise with less then 100 characters'],
  },
  duration: {
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
  weight: {
      type: Number,
      match: [/^[\d]$/, 'Please enter a valid number.'],
  },
//   add distance for cardio exercise
  distance: {
      type: Number,
      match: [/^[\d]$/, 'Please enter a valid number.'],
  },
});

const Exercise = mongoose.model('Exercise', exercisesSchema);

module.exports = Exercise;