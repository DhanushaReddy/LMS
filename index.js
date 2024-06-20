const express = require('express');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const lecturerRoutes = require('./routes/lecturerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', adminRoutes);
app.use('/api', userRoutes);
app.use('/api', lecturerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
