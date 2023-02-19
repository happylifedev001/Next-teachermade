const mongoose = require('mongoose');
// const Schema =  mongoose.Schema();
const SlideSchema = new mongoose.Schema({
    background: String,
    elements: [ElementSchema]
});

const ElementSchema = new mongoose.Schema({
    type: String,
    geometry: {
        x: Number,
        y: Number,
        w: Number,
        h: Number
    },
    point: Number
})

const ActivitySchema = new mongoose.Schema({
  who: String,
  when: Date,
  slides: [SlideSchema]
});

module.exports = mongoose.model('Activity', ActivitySchema);
