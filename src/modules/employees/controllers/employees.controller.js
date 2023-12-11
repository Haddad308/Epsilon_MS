import Employee from '../models/employees.model.js';

const getAllEmployees = async (req, res) => {
  try {
    const data = await Employee.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addEmployee = async (req, res) => {
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
    res.status(500).json({ message: error.message });
  }
};

const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Note.findByPk(id);
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editEmployee = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  getAllEmployees,
  addEmployee,
  getEmployee,
  editEmployee,
  deleteEmployee,
};
