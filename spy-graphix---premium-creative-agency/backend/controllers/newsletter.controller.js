let newsletterStore = [
  { id: 'sub-1', email: 'editor@designboom.com', subscribedAt: new Date(Date.now() - 86400000 * 5).toISOString() },
  { id: 'sub-2', email: 'curator@awwwards.com', subscribedAt: new Date(Date.now() - 86400000 * 2).toISOString() },
];

export const subscribeNewsletter = (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email address is required.' });
  }

  const existing = newsletterStore.find((s) => s.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return res.json({ message: 'You are already subscribed to the SPY GRAPHIX Journal.' });
  }

  const newSub = { id: `sub-${Date.now()}`, email, subscribedAt: new Date().toISOString() };
  newsletterStore.unshift(newSub);

  res.status(201).json({
    success: true,
    message: 'Subscribed successfully to the SPY GRAPHIX Creative Journal.',
    data: newSub,
  });
};

export const getSubscribers = (req, res) => {
  res.json(newsletterStore);
};

export const deleteSubscriber = (req, res) => {
  newsletterStore = newsletterStore.filter((s) => s.id !== req.params.id);
  res.json({ success: true, message: 'Subscriber removed' });
};

export const exportCSV = (req, res) => {
  let csvContent = 'ID,Email,SubscribedAt\n';
  newsletterStore.forEach((item) => {
    csvContent += `"${item.id}","${item.email}","${item.subscribedAt}"\n`;
  });

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="spygraphix_subscribers.csv"');
  res.status(200).send(csvContent);
};
