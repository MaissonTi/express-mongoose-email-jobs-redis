import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: String,
    email: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    file: [{ type: Schema.Types.ObjectId, ref: 'File' }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
