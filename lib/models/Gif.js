const mongoose = require('mongoose');

const gifSchema = new mongoose.Schema({
  gifLink: {
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

const Gif = mongoose.model('Gif', gifSchema);

module.exports = Gif;
