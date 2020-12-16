import {Router} from 'express';
import UserController from './app/controllers/UserController'
const router = Router();

router.post('/User/Create', UserController.store)

router.get('/User/List', UserController.index)

router.post('/User/Login', UserController.login)

export default router; 