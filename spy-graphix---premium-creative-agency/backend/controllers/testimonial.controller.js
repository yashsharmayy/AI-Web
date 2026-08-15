import { INITIAL_TESTIMONIALS } from '../../src/data/initialData.js';

let testimonialsStore = [...INITIAL_TESTIMONIALS];

export const getTestimonials = (req, res) => {
  res.json(testimonialsStore);
};

export const createTestimonial = (req, res) => {
  const newTestimonial = { ...req.body, id: `t-${Date.now()}` };
  testimonialsStore.unshift(newTestimonial);
  res.status(201).json(newTestimonial);
};

export const deleteTestimonial = (req, res) => {
  testimonialsStore = testimonialsStore.filter((t) => t.id !== req.params.id);
  res.json({ success: true, message: 'Testimonial deleted' });
};
