import { Router } from 'express';
import { checkGroup } from '../middlewares/groups.middleware.js';

import {
  getAllGroups,
  addGroup,
  getGroup,
  editGroup,
  deleteGroup,
} from '../controllers/groups.controller.js';

const router = Router();

router.get('/', getAllGroups);
router.post('/', addGroup);

router.get('/:groupId',checkGroup, getGroup);
router.patch('/:groupId',checkGroup, editGroup);
router.delete('/:groupId',checkGroup, deleteGroup);

export default router;
