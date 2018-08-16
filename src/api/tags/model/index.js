const { mongoose } = require('../../../server.dependencies');
const { Schema } = mongoose;

const TagSchema = new Schema(
  {
    tag: { type: String, required: true, unique: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Tag', TagSchema);
