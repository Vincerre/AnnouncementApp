const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/client/build')));

const adsRoutes = require();
const authRoutes = require();

app.use('/api/ads', adsRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb+srv://vincerre:kinomaniak111!@fullstack-app.81gbipl.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', (err) => console.log('Error ' + err));

const server = app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
