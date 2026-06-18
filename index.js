const express = require('express');
const cors = require('cors');
require('dotenv').config();

const notesRoutes = require('./routes/notesRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows parsing of JSON data in req.body

// Routes
app.use('/api/notes', notesRoutes);

// Root route for health check
app.get('/', (req, res) => {
  res.send('Notes App Backend is running!');
});

// Start the server (only if executed directly, i.e. local development)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for Vercel serverless functions
module.exports = app;
