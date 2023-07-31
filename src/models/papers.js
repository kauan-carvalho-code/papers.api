import mongoose from "mongoose";

const PapersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  value: { type: Number, required: true },
  grammage: { type: Number, required: true }
})

PapersSchema.set('toJSON', {
  virtuals: true,
  versionKey:false,
  transform: (_doc, ret) => { delete ret._id }
});

const PapersModel = mongoose.model('papers', PapersSchema)

export default PapersModel;