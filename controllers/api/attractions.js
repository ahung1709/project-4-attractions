const Attraction = require('../../models/attraction')

module.exports = {
    index, 
    create, 
    update, 
    delete: deleteAttraction, 
}

async function index(req, res) {
    try {
        const attractions = await Attraction.find({}).sort('name').exec();
        res.json(attractions)
    } catch(err) {
        res.json(err)
    }
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        const attraction = await Attraction.create(req.body)
        res.json(attraction)
    } catch(err) {
        res.json(err)
    }
}

async function update(req, res) {
    try {
        const attraction = await Attraction.findByIdAndUpdate(req.body.id, req.body, { new: true })
        res.json(attraction)
    } catch(err) {
        res.json(err)
    }
}

async function deleteAttraction(req, res) {
    try {
        const attraction = await Attraction.findByIdAndDelete(req.body.id);
        res.json(attraction)
    } catch(err) {
        res.json(err)
    }
}