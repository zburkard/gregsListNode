import mongoose from "mongoose";
const Schema = mongoose.Schema

export const JobSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true
  },
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
});