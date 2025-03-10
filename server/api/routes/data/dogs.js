import newRouter from '../../new-router.js';
const router = newRouter();
router.get('/', (req, res) => {
    const dogBreeds = [
        'Labrador Retriever',
        'German Shepherd',
        'Golden Retriever',
        'Bulldog',
        'Beagle',
        'Poodle',
        'Rottweiler',
        'Yorkshire Terrier',
        'Boxer',
        'Dachshund'
    ];
    res.json(dogBreeds);
});


export default router;