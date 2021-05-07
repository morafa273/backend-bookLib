import express from 'express';

import {getRent,getRents,createRent,deleteRent} from '../controllers/rents.js';

const router = express.Router();

router.get('/', getRents);

router.post('/', createRent);

router.get('/:id', getRent);

router.delete('/:id', deleteRent);

//router.patch('/:id', updateRent);

export default router;