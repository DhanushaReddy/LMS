const express = require('express');
const router = express.Router();
const lecturerController = require('../controllers/lecturerController');

router.post('/lecturers', lecturerController.createLecturer);

router.get('/lecturers', lecturerController.getAllLecturers);

router.get('/lecturers/:id', lecturerController.getLecturerById);

router.put('/lecturers/:id', lecturerController.updateLecturerById);

router.delete('/lecturers/:id', lecturerController.deleteLecturerById);

module.exports = router;
