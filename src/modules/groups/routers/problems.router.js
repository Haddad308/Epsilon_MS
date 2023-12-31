import { Router } from "express";

import {
    getAllProblems,
    addProblem,
    getProblem,
    editProblem,
    deleteProblem
} from "../controllers/problems.controller.js"

import { checkGroup } from '../middlewares/problems.middleware.js';

const router = Router()

router
    .route("/")
    .get(getAllProblems)
    .post(addProblem);

router
    .route("/:problemId")
    .get(checkGroup,getProblem)
    .patch(checkGroup,editProblem)
    .delete(checkGroup,deleteProblem);

export default router; 