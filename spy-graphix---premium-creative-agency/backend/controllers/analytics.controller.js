import { INITIAL_ANALYTICS } from '../../src/data/initialData.js';

export const getAnalytics = (req, res) => {
  res.json({
    ...INITIAL_ANALYTICS,
    timestamp: new Date().toISOString(),
  });
};
