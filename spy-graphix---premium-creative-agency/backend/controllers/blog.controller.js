import { INITIAL_BLOGS } from '../../src/data/initialData.js';

let blogsStore = [...INITIAL_BLOGS];

export const getBlogs = (req, res) => {
  res.json(blogsStore);
};

export const getBlogBySlug = (req, res) => {
  const blog = blogsStore.find(
    (b) => b.slug === req.params.slug || b.id === req.params.slug
  );
  if (!blog) return res.status(404).json({ error: 'Blog post not found' });
  res.json(blog);
};

export const createBlog = (req, res) => {
  const newBlog = {
    ...req.body,
    id: `b-${Date.now()}`,
    slug: req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    date: req.body.date || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  };
  blogsStore.unshift(newBlog);
  res.status(201).json(newBlog);
};

export const updateBlog = (req, res) => {
  const index = blogsStore.findIndex((b) => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Blog post not found' });
  blogsStore[index] = { ...blogsStore[index], ...req.body };
  res.json(blogsStore[index]);
};

export const deleteBlog = (req, res) => {
  blogsStore = blogsStore.filter((b) => b.id !== req.params.id);
  res.json({ success: true, message: 'Blog deleted' });
};
