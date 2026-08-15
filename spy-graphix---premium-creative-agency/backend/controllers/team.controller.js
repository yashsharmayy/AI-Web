import { INITIAL_TEAM } from '../../src/data/initialData.js';

let teamStore = [...INITIAL_TEAM];

export const getTeam = (req, res) => {
  res.json(teamStore);
};

export const createTeamMember = (req, res) => {
  const newMember = { ...req.body, id: `t-${Date.now()}` };
  teamStore.push(newMember);
  res.status(201).json(newMember);
};

export const updateTeamMember = (req, res) => {
  const index = teamStore.findIndex((t) => t.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Team member not found' });
  teamStore[index] = { ...teamStore[index], ...req.body };
  res.json(teamStore[index]);
};

export const deleteTeamMember = (req, res) => {
  teamStore = teamStore.filter((t) => t.id !== req.params.id);
  res.json({ success: true, message: 'Team member deleted' });
};
