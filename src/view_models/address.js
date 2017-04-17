const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  AddressID: Number,
  AddressLine1: String,
  AddressLine2: String,
  City: String,
  StateProvince: String,
  CountryRegion: String,
  PostalCode: String,
  rowguid: String,
  ModifiedDate: Date
});

module.exports = mongoose.model('SalesLT.Address', AddressSchema);
