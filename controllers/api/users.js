const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require("../../models/user")

module.exports = {
    create, 
    login, 
    checkToken, 
}

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }

async function create(req, res) {
    try {
        // make a new user in a mongoose database
        const user = await User.create(req.body)
        // token will be a string
        const token = createJWT(user)
        // Yes, we can use res.json to send back just a string
        // The client code needs to take this into consideration
        res.status(200).json(token)
    //     // create JWT
    //     // response with the JWT
    } catch(err) {
        // Client will check for non-2xx status code 
        // 400 = Bad Request
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        // Look into our DB and see if we have a user
        // with the incoming email
        const user = await User.findOne({email: req.body.email})
        if (!user) throw new Error('No matching User')
        
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error('Bad Password')

        const token = createJWT(user)
        res.status(200).json(token)
        // console.log(user)
    } catch(err) {
        res.status(400).json(err)
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    res.json(req.exp);
}

