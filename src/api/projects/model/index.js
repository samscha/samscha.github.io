const { mongoose } = require('../../../server.dependencies');
const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    thumbnail: { type: String },
    urls: [{ type: String }],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Project', ProjectSchema);
