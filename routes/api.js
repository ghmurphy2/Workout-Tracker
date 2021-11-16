// requires, get post rember error catch and sort
const router = require('express').Router();
const { workouts, exercises } = require('../models');
const { Types } = require('mongoose');
const date = Date.now();

router
.route('/workouts')
// post route with error, pull execercise from workout
.post(async (req, res) => {
    try{
        const created = await workouts.create({date});
        res.status(200).json(created);
    } catch (err){
        res.status(500).json(err)
    }
    });
    // get all
router.get('/workouts/range', async(req, res) =>{
    try{
        const workoutsAll = await workouts.find({}).populate('exercises')
        res.status(200).json(workoutsAll)
    }
    catch (err){
        res.status(500).json(err)
    }
    });
    module.exports = router
// add new

router.put('/workouts/:id', async (req,res) =>{

    try{
        const {_id} = await excercises.create(req.body);
        const pushed = await workouts.findOneAndUpdate(
            // be sure to _id
            {_id: req.params.id},
            {$push:{exercises: Type.Object(_id)}},
            {new:true}
            // console.log(exercises)
        )
        res.status(200).json(pushed);
    }catch{
        res.status(500).json(err)
    }

    
})
module.exports = router;