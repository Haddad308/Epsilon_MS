import { Router } from "express";

import {
    getAllQualities,
    addQuality,
    getQuality,
    editQuality,
    deleteQuality
} from "../controllers/qualities.controller.js"


const router = Router()

router
    .route("/")
    .get(getAllQualities)
    .post(addQuality);

router
    .route("/:qualityId")
    .get(getQuality)
    .patch(editQuality)
    .delete(deleteQuality);

export default router; 