const Attraction = require('../../models/attraction')

module.exports = {
    index, 
    create, 
    update, 
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
        // console.log(req.body)
        // console.log(req.user)
        const attraction = await Attraction.create(req.body)
        res.json(attraction)
    } catch(err) {
        res.json(err)
    }
}

async function update(req, res) {
    console.log("attractionsCtrl.update222")
    console.log(req.body)
    console.log(req.params)

    try {
        const attraction = await Attraction.findByIdAndUpdate(req.body.id, req.body, { new: true })
        res.json(attraction)
    } catch(err) {
        res.json(err)
    }

    // Attraction.findByIdAndUpdate(req.body.id, req.body, function (err, attraction) {
    //     if (err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log("Updated Attraction : ", attraction);
    // })
}
