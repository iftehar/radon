let axios = require("axios")
//  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=758942a516f24150e318b3362a64d75c`
let weatherDetails = async function (req, res) {
    try {
        let city = req.query.q
        let options = {
            metod: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b385336d421090ea294e996affc9a8b`

        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.weatherDetails = weatherDetails

let weathertemp = async function (req, res) {
    try {
        let citys = req.query.q
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=2b385336d421090ea294e996affc9a8b`
        }
        let result = axios(options)
        let data = result.data
        res.status(200).send({ msg: data.main.temp, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.weathertemp = weathertemp

let weathertempshorted = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []
        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=2b385336d421090ea294e996affc9a8b`)

            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort( function(a,b){return a.temp - b.temp})
        res.status(200).send ({status :true, data:sorted})
    }catch(error){
        res.status(500).send({status:false, msg:"server error"})
    }
}

module.exports.weathertempshorted = weathertempshorted