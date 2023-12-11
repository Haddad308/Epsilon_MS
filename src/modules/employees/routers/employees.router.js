import { Router } from "express";
import {
    getAllEmployees,
    addEmployee,
    getEmployee,
    editEmployee,
    deleteEmployee
} from "../controllers/employees.controller.js"; 

const router = Router();

router
    .route("/")
    .get(getAllEmployees)
    .post(addEmployee)


router
    .route("/:id")
    .get(getEmployee)
    .patch(editEmployee)
    .delete(deleteEmployee)

export default router; 