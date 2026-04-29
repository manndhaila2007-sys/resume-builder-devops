const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check route - used by automated tests
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'App is running!' });
});

// Only start listening when run directly (not during testing)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
