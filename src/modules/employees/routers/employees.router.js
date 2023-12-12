import { Router } from 'express';
import {
  getAllEmployees,
  addEmployee,
  getEmployee,
  editEmployee,
  deleteEmployee,
} from '../controllers/employees.controller.js';

const router = Router();

router.get('/', getAllEmployees);
router.post('/', addEmployee);
router.get('/:id', getEmployee);
router.patch('/:id', editEmployee);
router.delete('/:id', deleteEmployee);

export default router;
