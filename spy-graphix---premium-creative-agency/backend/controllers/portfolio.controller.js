import { INITIAL_PROJECTS } from '../../src/data/initialData.js';

let projectsStore = [...INITIAL_PROJECTS];

export const getProjects = (req, res) => {
  const { category } = req.query;
  if (category && category !== 'All') {
    return res.json(projectsStore.filter((p) => p.category === category));
  }
  res.json(projectsStore);
};

export const getProjectBySlug = (req, res) => {
  const project = projectsStore.find(
    (p) => p.slug === req.params.slug || p.id === req.params.slug
  );
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
};

export const createProject = (req, res) => {
  const newProject = {
    ...req.body,
    id: `p-${Date.now()}`,
    slug: req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  };
  projectsStore.unshift(newProject);
  res.status(201).json(newProject);
};

export const updateProject = (req, res) => {
  const index = projectsStore.findIndex((p) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Project not found' });
  projectsStore[index] = { ...projectsStore[index], ...req.body };
  res.json(projectsStore[index]);
};

export const deleteProject = (req, res) => {
  projectsStore = projectsStore.filter((p) => p.id !== req.params.id);
  res.json({ success: true, message: 'Project deleted' });
};
