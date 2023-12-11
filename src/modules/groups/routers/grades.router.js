import { Router } from "express";

import {
    getAllGrades,
    addGrades,
    getGrade,
    editGrades,
    deleteGrades
} from "../controllers/grades.controller.js"

const router = Router()

router
    .route("/")
    .get(getAllGrades)
    .post(addGrades);

router
    .route("/:gradeId")
    .get(getGrade)
    .patch(editGrades)
    .delete(deleteGrades);

export default router; 