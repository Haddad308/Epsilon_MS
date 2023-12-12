import Employee from '../models/employees.model.js';
import Assistant from '../models/assistant.model.js';
import Instructor from '../models/instructor.model.js';
import Mentor from '../models/mentor.model.js';
import AssistantHistory from '../models/assistantHistory.model.js';
import InstructorHistory from '../models/instructorHistory.model.js';
import MentorHistory from '../models/mentorHistory.model.js';




const getAllEmployees = async (req, res, next) => {
  try {
    const data = await Employee.findAll();
    res.json(data);
  } catch (error) {
    next(error)
  }
};

const addEmployee = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber, birthDate } = req.body;
    const data = await Employee.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      birthDate,
    });
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

const getEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Employee.findByPk(id);
    res.json({ data });
  } catch (error) {
    next(error)
  }
};

const editEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, birthDate } = req.body;
    const data = await Employee.update(
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        birthDate,
      },
      { where: { id } }
    );
    res.json({ data });
  } catch (error) {
    next(error)
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Employee.destroy({ where: { id } });
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

export {
  getAllEmployees,
  addEmployee,
  getEmployee,
  editEmployee,
  deleteEmployee,
};
