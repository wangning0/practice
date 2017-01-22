/**
 * Created by wangning on 2017/1/22.
 */
import mongoose, { Schema } from 'mongoose';

export default mongoose.model('Recipe', new Schema({
  id: String,
  name: String,
  description: String,
  imagePath: String,
  steps: Array,
  updatedAt: Date,
}));