const express = require('express');
const port = 5000;
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

const app = express();
const cors = require("cors")
app.use(
    cors({
        origin: "*",
    })
)

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the RandomIdeas API'});
}); 

const ideasRouter = require('./routes/ideas');

app.use('/api/ideas', ideasRouter);

app.listen(port, () => console.log(`Server listening on  port ${port}`));