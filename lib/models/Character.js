const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { 
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

characterSchema.statics.getRandomCharacter = function(count) {
  return this.aggregate([
    { $sample: { size: count } }, 
    { $project: { __v: false } }
  ]);
};

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
