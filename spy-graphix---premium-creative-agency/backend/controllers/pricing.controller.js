let pricingStore = [
  {
    id: 'pr-1',
    planName: 'Brand Launch',
    price: '$4,500',
    billingCycle: 'one-time',
    description: 'Complete core identity, logo design & guidelines.',
    features: ['Custom Logo Suite', 'Typography & Palette System', 'Brand Guidelines PDF', 'Vector & 3D Assets'],
    recommended: false,
  },
  {
    id: 'pr-2',
    planName: 'Digital Experience',
    price: '$9,800',
    billingCycle: 'one-time',
    description: 'Awwwards-grade interactive 3D website & custom UI.',
    features: ['3D WebGL Canvas', 'React / Vite Architecture', 'CMS Admin Integration', 'SEO & Speed Optimization'],
    recommended: true,
  },
  {
    id: 'pr-3',
    planName: 'Full Agency Retainer',
    price: '$14,500',
    billingCycle: 'monthly',
    description: 'Dedicated creative team for ongoing 3D, social & web execution.',
    features: ['Full Creative Team Access', 'Unlimited Design Requests', '24h Priority Support', 'Monthly Campaign Direction'],
    recommended: false,
  },
];

export const getPricings = (req, res) => {
  res.json(pricingStore);
};

export const createPricing = (req, res) => {
  const newPricing = { ...req.body, id: `pr-${Date.now()}` };
  pricingStore.push(newPricing);
  res.status(201).json(newPricing);
};

export const updatePricing = (req, res) => {
  const index = pricingStore.findIndex((p) => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Pricing plan not found' });
  pricingStore[index] = { ...pricingStore[index], ...req.body };
  res.json(pricingStore[index]);
};

export const deletePricing = (req, res) => {
  pricingStore = pricingStore.filter((p) => p.id !== req.params.id);
  res.json({ success: true, message: 'Pricing plan deleted' });
};
