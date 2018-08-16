const { mongoose } = require('../../../server.dependencies');
const { Schema } = mongoose;

const TechnologySchema = new Schema(
  {
    technology: { type: String, required: true, unique: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Technology', TechnologySchema);
