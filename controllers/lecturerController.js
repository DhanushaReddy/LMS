const Lecturer = require('../models/lecturer');

// Create a new Lecturer
exports.createLecturer = async (req, res) => {
  try {
    const { username, password } = req.body;
    const lecturer = await Lecturer.create({ username, password });
    res.status(201).json(lecturer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get all Lecturers
exports.getAllLecturers = async (req, res) => {
  try {
    const lecturer = await Lecturer.find();
    res.json(lecturer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Get Lecturer by ID
exports.getLecturerById = async (req, res) => {
  try {
    const lecturer = await Lecturer.findById(req.params.id);
    if (!lecturer) {
      return res.status(404).json({ error: 'Lecturer not found' });
    }
    res.json(lecturer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Update Lecturer by ID
exports.updateLecturerById = async (req, res) => {
  try {
    const { username, password } = req.body;
    const lecturer = await Lecturer.findByIdAndUpdate(req.params.id, { username, password }, { new: true });
    if (!lecturer) {
      return res.status(404).json({ error: 'Lecturer not found' });
    }
    res.json(lecturer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

// Delete Lecturer by ID
exports.deleteLecturerById = async (req, res) => {
  try {
    const lecturer = await Lecturer.findByIdAndDelete(req.params.id);
    if (!lecturer) {
      return res.status(404).json({ error: 'Lecturer not found' });
    }
    res.json({ message: 'Lecturer deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};
