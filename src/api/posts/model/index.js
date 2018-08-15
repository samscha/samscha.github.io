const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = require('../../users/model/controller');

const PostSchema = new Schema(
  {
    company: { type: String, required: true },
    position: { type: String, required: true },
    jobId: { type: String },
    location: { type: String },
    source: { type: String },
    hasApplied: { type: Boolean, default: true },
    applied: { type: Date, default: Date.now },
    notes: { type: String },
    url: { type: String },
    interview: { type: Date },
    offer: { type: Date },
    rejected: { type: Date },
    archive: { type: Date },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  },
);

// PostSchema.post('remove', async function() {
//   await user.removeJob(this._id);
// });

module.exports = mongoose.model(`Job`, PostSchema);
