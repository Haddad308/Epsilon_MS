import { Router } from "express";
import {
    getAllProgressSheets,
    addProgressSheet,
    getProgressSheet,
    editProgressSheet,
    deleteProgressSheet
} from "../controllers/progressSheet.controller.js";
import { checkProgressSheet } from "../middlewares/progressSheet.middleware.js";



const router = Router();

router
    .route("/")
    .get(getAllProgressSheets)
    .post(addProgressSheet)


router
    .route("/:id")
    .get(checkProgressSheet, getProgressSheet)
    .patch(checkProgressSheet, editProgressSheet)
    .delete(checkProgressSheet, deleteProgressSheet)


export default router; 