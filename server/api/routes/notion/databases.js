
import Databases from '../../data/notion/databases/databases.js';
import newRouter from '../../new-router.js';
const router = newRouter();

router.get('/', async (req, res) => {
    try {
        const data = await Databases.getAll();
        res.json(data, 200);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while retrieving the database information.' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Databases.getSingle(id);
        res.json(data, 200);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the database information.' });
    }
});

router.get('/search/:term', async (req, res) => {
    const { term } = req.params;
    try {
        const data = await Databases.fromSearchTerm(term);
        res.json(data, 200);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the database information.' });
    }
});


export default router;