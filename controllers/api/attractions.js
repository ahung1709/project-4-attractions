const Attraction = require('../../models/attraction')

module.exports = {
    index, 
    create, 
}

async function index(req, res) {
    try {
        const attractions = await Attraction.find({}).sort('name').exec();
        console.log("inside controllers/api/attractions.js index()")
        console.log(attractions)
        res.json(attractions)
    } catch(err) {
        res.json(err)
    }
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        console.log(req.body)
        // console.log(req.user)
        const attraction = await Attraction.create(req.body)
        res.json(attraction)
    } catch(err) {
        res.json(err)
    }
}

