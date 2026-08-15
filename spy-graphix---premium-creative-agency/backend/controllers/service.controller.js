import { INITIAL_SERVICES } from '../../src/data/initialData.js';

let servicesStore = [...INITIAL_SERVICES];

export const getServices = (req, res) => {
  res.json(servicesStore);
};

export const getServiceBySlug = (req, res) => {
  const service = servicesStore.find(
    (s) => s.slug === req.params.slug || s.id === req.params.slug
  );
  if (!service) return res.status(404).json({ error: 'Service not found' });
  res.json(service);
};

export const createService = (req, res) => {
  const newService = {
    ...req.body,
    id: `s-${Date.now()}`,
    slug: req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  };
  servicesStore.unshift(newService);
  res.status(201).json(newService);
};

export const updateService = (req, res) => {
  const index = servicesStore.findIndex((s) => s.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Service not found' });
  servicesStore[index] = { ...servicesStore[index], ...req.body };
  res.json(servicesStore[index]);
};

export const deleteService = (req, res) => {
  servicesStore = servicesStore.filter((s) => s.id !== req.params.id);
  res.json({ success: true, message: 'Service deleted' });
};
