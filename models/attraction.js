const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

const attractionSchema = new Schema({
    name: {type: String, required: true},
    coverPicture: {type: String}, 
    description: {type: String}, 
}, {
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        // delete ret.password;
        return ret;
      }
    }
});

module.exports = mongoose.model('Attraction', attractionSchema);
