// requires, get post rember error catch and sort
const router = require('express').Router();
const { Workouts, Excercise } = require('../models');
const { Types } = require('mongoose');
const date = Date.now();

router
.route('/workouts')
// post route with error, pull execercise from workout
.post(async (req, res) => {
    try{
        const created = await Workouts.create({date});
        res.status(200).json(created);
    } catch (err){
        res.status(500).json(err)
        console.log(err)
    }
    })

.get(async (res,req) => {
    try{
        const lastWorkout = await Workouts.findOne()
        .sort({ day: -1})
        // desencding order
        .limit(1)
        // by one
        .populate('exercises')
        let duration = 0;
        lastWorkout.excercises.forEach((excer) =>{
            duration += excer.duration;
        }
        )
        lastWorkout.totalDuration = duration;
        res.status(200).json(lastWorkout);
    }
    catch (err){

        res.status(500).json(err)
    }
})

router.put('/workouts/:id', async (req,res) =>{

    try{
        const { _id } = await Excercise.create(req.body);
        const pushed = await Workouts.findOneAndUpdate(
            // be sure to _id
            { _id: req.params.id},
            { $push:{exercises: Types.ObjectID(_id)}},
            {new:true}
            // console.log(exercises)
        )
        res.status(200).json(pushed);
    } catch(err){
        res.status(500).json(err)
    }
});
    // get all
router.get('/workouts/range', async(req, res) =>{
    try{
        const workoutsAll = await Workouts.find({}).populate('exercises')
        res.status(200).json(workoutsAll)
    }
    catch (err){
        res.status(500).json(err)
    }
    });

// add new


module.exports = router;