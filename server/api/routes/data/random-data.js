import newRouter from '../../new-router.js';
const router = newRouter();

const generateRandomData = (numItems) => {
  const data = [];
  for (let i = 0; i < numItems; i++) {
    data.push({
      id: i + 1,
      name: `Item ${i + 1}`,
      value: Math.floor(Math.random() * 100),
    });
  }
  return data;
};

const generateRandomLetters = (numItems) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const data = [];
  for (let i = 0; i < numItems; i++) {
    data.push({
      id: i + 1,
      letter: letters[Math.floor(Math.random() * letters.length)],
    });
  }
  return data;
};

// GET /api/data/random-data
router.get('/', (req, res) => {
  const numItems = parseInt(req.query.numItems) || 10;
  const data = generateRandomData(numItems);
  res.json(data);
});

// GET /api/data/random-data/letters
router.get('/letters', (req, res) => {
  const numItems = parseInt(req.query.numItems) || 10;
  const data = generateRandomLetters(numItems);
  res.json(data);
});

export default router;
