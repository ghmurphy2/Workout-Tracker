// requires, get post rember error catch and sort
const router = require('express').Router();
const {Workout} = require('../models');
const date = Date.now();


router.post("/api/workouts/", (req, res) => {
  Workout.create(req.body).then((dbWorkout) => {
  res.json(dbWorkout);

}).catch(err =>{
res.json(err);
})
});


router.get('/workouts', (req, res) =>{
    Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: '$exercises.duration',
            },
          },
        },
      ])
        .then((dbWorkouts) => {
          res.json(dbWorkouts);
        })
        .catch((err) => {
          res.json(err);
        });
});

router.put('/workouts/:id', ({body, params}, res) =>{

                Workout.findByIdAndUpdate(
                    params.id,
                    { $push: {excercise: body}},
                    {new: true}
                )
                .then((dbWorkouts) => {
                    res.json(dbWorkouts);
                })
                .catch((err) => {
                res.json(err);
                });
});

router.get('/workouts/range', (req, res) => {
     Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: '$exercises.duration',
            },
          },
        },
      ])
        .sort( { _id: -1 } )
        .limit(7)
        .then((dbWorkouts) => {
          res.json(dbWorkouts);
        })
        .catch((err) => {
          res.json(err);
        });
} )



module.exports = router;