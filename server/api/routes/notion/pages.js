import Pages from '../../data/notion/pages/pages.js';
import newRouter from '../../new-router.js';
const router = newRouter();

router.get('/', async (req, res) => {
    try {
        const data = await Pages.getAll();
        res.json(data, 200);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving the pages information.' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Pages.getSingle(id);
        res.json(data, 200);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving the page information.' });
    }
});

router.get('/search/:term', async (req, res) => {
    const { term } = req.params;
    try {
        const data = await Pages.fromSearchTerm(term);
        res.json(data, 200);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving the page information.' });
    }
});
export default router;
