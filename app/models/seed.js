const mongoose = require('mongoose')
const Exercise = require('./exercise')
const db = require('../../config/db')


const startExercises = [
    {name:"Bench Press", type: "chest", day: 1, difficult: false },
    {name:"Deadlift", type: "back", day: 2, difficult: true },
    {name:"Barbell Squat", type: "legs", day: 3, difficult: true },
    {name:"Military Press", type: "shoulders", day: 1, difficult: false },
    {name:"Barbell Row", type: "back", day: 2, difficult: true },
    {name:"Walking Lunges", type: "legs", day: 3, difficult: true }
]

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Exercise.deleteMany()
            .then(deletedexercises => {
                console.log('the deleted exercises:', deletedexercises)
                // adding Excercises to the database
                Exercise.create(startExercises)
                    .then(newexercises => {
                        console.log('the new exercises', newexercises)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })