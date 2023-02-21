const mongoose = require('mongoose');
// const Schema =  mongoose.Schema();

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

const SlideSchema = new mongoose.Schema({
    background: String,
    svg: String,
    elements: [ElementSchema]
});

const ActivitySchema = new mongoose.Schema({
  who: String,
  when: String,
  slides: [SlideSchema]
});

module.exports = mongoose.model('Activity', ActivitySchema);
