import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

export const TaskSchema = new Schema(
  {
    description: [{ type: String }],
    completed: { type: String, default: false },
    creatorId: { type: ObjectId, required: true, ref: 'Profile' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

TaskSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})
