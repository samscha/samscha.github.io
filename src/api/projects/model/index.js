const { mongoose } = require('../../../server.dependencies');
const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    thumbnail: { type: String },
    urls: [{ type: String }],
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    technologies: [{ type: Schema.Types.ObjectId, ref: 'Technology' }],
  },
  {
    timestamps: true,
  },
);

ProjectSchema.statics.getAllProjects = async function(parms = {}) {
  const Project = this;

  try {
    const projects = await Project.find(parms);

    return projects;
  } catch (error) {
    return error;
  }
  // if (err) return cb({ err });

  // cb(projects);
  // });
};

module.exports = mongoose.model('Project', ProjectSchema);
