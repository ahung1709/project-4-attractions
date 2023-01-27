const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attractionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: {type: String, required: true},
    coverPicture: {type: String}, 
    location: {type: String}, 
    description: {type: String}, 
}, {
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        return ret;
      }
    }
});

module.exports = mongoose.model('Attraction', attractionSchema);
