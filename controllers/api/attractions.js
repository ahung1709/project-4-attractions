const Attraction = require('../../models/attraction')

module.exports = {
    index, 
}

async function index(req, res) {
    const attractions = await Attraction.find({}).sort('name').exec();
    console.log("inside controllers/api/attractions.js index()")
    console.log(attractions)
    res.json(attractions)
}

