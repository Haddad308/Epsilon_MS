import { Router } from "express";
import {
    getAllProgressSheets,
    addProgressSheet,
    getProgressSheet,
    editProgressSheet,
    deleteProgressSheet
} from "../controllers/progressSheet.controller.js";

const router = Router();

router
    .route("/")
    .get(getAllProgressSheets)
    .post(addProgressSheet)


router
    .route("/:id")
    .get(getProgressSheet)
    .patch(editProgressSheet)
    .delete(deleteProgressSheet)


export default router; 