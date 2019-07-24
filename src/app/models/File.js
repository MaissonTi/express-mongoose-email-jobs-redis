/* eslint-disable func-names */
import mongoose from 'mongoose';
import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

const { Schema } = mongoose;

const FileSchema = new Schema(
  {
    name: String,
    size: Number,
    path: String,
    url: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

FileSchema.pre('save', function() {
  if (!this.url) {
    this.url = `${process.env.APP_URL}/files/${this.path}`;
  }
});

FileSchema.pre('remove', function() {
  return promisify(
    fs.unlink
  )(resolve(__dirname, '..', '..', '..', 'tmp', 'uploads', this.path));
});

export default mongoose.model('File', FileSchema);
