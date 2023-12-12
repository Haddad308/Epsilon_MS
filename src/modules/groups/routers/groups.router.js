import { Router } from 'express';

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

router.get('/:groupId', getGroup);
router.patch('/:groupId', editGroup);
router.delete('/:groupId', deleteGroup);

export default router;
