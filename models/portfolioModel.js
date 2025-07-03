import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  name: String,
  skills: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Portfolio', portfolioSchema);
