import { Router } from "express";

import {
    getAllProblems,
    addProblem,
    getProblem,
    editProblem,
    deleteProblem
} from "../controllers/problems.controller.js"

const router = Router()

router
    .route("/")
    .get(getAllProblems)
    .post(addProblem);

router
    .route("/:problemId")
    .get(getProblem)
    .patch(editProblem)
    .delete(deleteProblem);

export default router; 