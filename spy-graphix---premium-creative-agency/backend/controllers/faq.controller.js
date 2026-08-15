import { INITIAL_FAQS } from '../../src/data/initialData.js';

let faqsStore = [...INITIAL_FAQS];

export const getFAQs = (req, res) => {
  res.json(faqsStore);
};

export const createFAQ = (req, res) => {
  const newFAQ = { ...req.body, id: `faq-${Date.now()}` };
  faqsStore.push(newFAQ);
  res.status(201).json(newFAQ);
};

export const deleteFAQ = (req, res) => {
  faqsStore = faqsStore.filter((f) => f.id !== req.params.id);
  res.json({ success: true, message: 'FAQ deleted' });
};
