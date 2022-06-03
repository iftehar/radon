const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",

            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]

router.post('/players', function (req, res) {
    let data = req.body
    for (var i = 0; i < players.length; i++) {
        if (players[i].name == data.name) {
            return res.send("this player is already exist")
        }
    }
        players.push(data)
        return res.send({ data: players, status: true })
})


module.exports = router;