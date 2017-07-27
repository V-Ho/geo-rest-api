const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create ninja Schema & model



// create geolocation Schema that contains geometry properties
const GeoSchema = new Schema({
  type: {           //type of coordinate (ex. Feature) on map
    type: String,   //type of data value
    default: "Point"
  },
  coordinates: {
    type: [Number], //coordinates are array of numbers
    index: "2dsphere"//distance btw 2 points incl global surface curve
  }
})

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']//pass msg to give feedback in not passed in properly
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false //default is false when creating new ninja
  },
  geometry: GeoSchema // including geometry properties from schema above
})

const Ninja = mongoose.model('ninja',NinjaSchema) //Create model Ninja.  where ninja is name of collection in db, and we want to have the schema structure
module.exports = Ninja;
