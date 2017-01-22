/**
 * Created by wangning on 2017/1/22.
 */
import mongoose, { Schema } from 'mongoose';

export defalt mongoose.model('User', new Schema({
  id: Number,
  userName: String,
  email: String,
  password: String,
  admin: Boolean,
}));