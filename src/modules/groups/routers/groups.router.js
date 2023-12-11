import { Router } from "express";

import {
    getAllGroups,
    addGroup,
    getGroup,
    editGroup,
    deleteGroup
} from "../controllers/groups.controller.js"

const router = Router()

router
    .route("/")
    .get(getAllGroups)
    .post(addGroup); 

router  
    .route("/:groupId")
    .get(getGroup)
    .patch(editGroup)
    .delete(deleteGroup);

export default router; 