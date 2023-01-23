
module.exports = {
    create, 
}

async function create(req, res) {
    // try {
    //     // make a new user in a mongoose database
    //     const user = await User.create(req.body)
    //     // token will be a string
    //     const token = createJWT(user)
    //     res.status(200).json(token)
    //     console.log(user)
    //     // create JWT
    //     // response with the JWT
    // } catch(err) {
    //     res.status(400).json(err)
    // }
    res.json({
        user: { 
            name: req.body.name, 
            email: req.body.email
        }
    })
}
