// requires, get post rember error catch and sort
const router = require('express').Router();
const { workouts, exercises } = require('../models');
const { Types } = require('mongoose');
const date = Date.now();

router
.route('/workouts')
// post route with error
.post(async (req, res) => {
    try{
        const created = await workouts.create({date});
        res.status(200).json(created);
    } catch (err){
        res.status(500).json(err)
    }
    })
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
}