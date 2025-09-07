const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routers/api');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json());

app.use('/api', apiRoutes); // 👈 prefix matters

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});