import mongoose from "mongoose";
const Schema = mongoose.Schema

export const HouseSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  yearBuilt: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  imgUrl: {
    type: String,
    required: true,
    default: '//placehold.it/300x300'
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});