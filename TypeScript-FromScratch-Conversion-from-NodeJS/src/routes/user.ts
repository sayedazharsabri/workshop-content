const express = require('express');
// const userController = require('../controllers/user');
import {regsiterUser, checkTypesAndInterface} from '../controllers/user';

const router = express.Router();
//


router.post('/regsiter', regsiterUser);
router.post('/update', checkTypesAndInterface);

export default router;