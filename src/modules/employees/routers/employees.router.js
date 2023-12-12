import { Router } from 'express';
import Employee from '../models/employees.model.js';
import {
  getAllEmployees,
  addEmployee,
  getEmployee,
  editEmployee,
  deleteEmployee,
} from '../controllers/employees.controller.js';

import { checkEmployee } from '../middlewares/employees.middleware.js';

const router = Router();

router.get('/', getAllEmployees);
router.post('/', addEmployee);
router.get('/:id', checkEmployee, getEmployee);
router.patch('/:id', checkEmployee, editEmployee);
router.delete('/:id', checkEmployee, deleteEmployee);

export default router;
