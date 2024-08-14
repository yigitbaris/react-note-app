import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Note', NoteSchema)
