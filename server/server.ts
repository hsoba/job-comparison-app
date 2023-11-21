import express from 'express';

// Create a new express application instance
const app = express();

// Setup a route for the API
app.get('/api', (req, res) => {
    res.json({"users": ["user1", "user2", "user3"]})
});

// Start the server
app.listen(5009, () => {
    console.log('Server is running on port 5009.');
}); 