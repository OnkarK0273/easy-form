const mongoose = require('mongoose');

const headerSchema = new mongoose.Schema({
  
  label: String,
  type: String,
  required:Boolean,
  // Allow additional fields not explicitly defined
  extraFields: {
    type: mongoose.Schema.Types.Mixed
  }
});

const formModel = mongoose.model('form', headerSchema);

module.exports = formModel;
