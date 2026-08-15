import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: { type: String, required: true },
    avatar: { type: String, required: true },
    experience: { type: String, default: '8+ Years' },
    socials: {
      linkedin: String,
      twitter: String,
      instagram: String,
      github: String,
    },
  },
  { timestamps: true }
);

export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
