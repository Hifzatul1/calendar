require('dotenv').config();
const connectDB = require("./backend/config/db");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

connectDB();

const companyRoutes = require('./backend/routes/companyRoutes');
const communicationRoutes = require('./backend/routes/communicationRoutes');

const app = express();
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/companies', companyRoutes);
app.use('/api/communications', communicationRoutes);


// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
