const express = require('express'); 
const router = express.Router();

const ideas = [
    {
        id: 1,
        text: 'Positive Newsletter, a newsletter that only shares positive, uplifting news',
        tag: 'Technology', 
        username: 'TonyStark', 
        date: '2022-01-02',
    },
    {
        id: 2,
        text: 'Milk cartons that turn a different colour the older your milk gets',
        tag: 'Inventions', 
        username: 'SteveRogers', 
        date: '2022-01-02',
    },
    {
        id: 3,
        text: 'A cure for COVID that does not involve vaccines',
        tag: 'Inventions', 
        username: 'TonyStark', 
        date: '2022-01-02',
    },
]

// Get all ideas
router.get('/', (req, res) => {
    res.json({success: true, data: ideas});
});

// Get single idea
router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id)

    if(!idea) {
        return res.status(404).json({success:false, error: 'Resource not found'})
    }

    res.json({success: true, data: idea});
});

module.exports = router;