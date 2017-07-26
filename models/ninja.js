const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create ninja Schema & model

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
  }

  //add in geo location
})

const Ninja = mongoose.model('ninja',NinjaSchema) //Create model Ninja.  where ninja is name of collection in db, and we want to have the schema structure
module.exports = Ninja;
