import {Router} from 'express';
import UserController from './app/controllers/UserController'
import HeadOfficeController from './app/controllers/HeadOfficeController'
import authMiddleware from './app/middlewares/authMiddleware'
const router = Router();

//User
router.post('/User/Create', UserController.store)

router.post('/User/Login', UserController.login)

router.get('/User/List', authMiddleware, UserController.index)

//HeadOffice
router.post('/HeadOffice/Create', authMiddleware, HeadOfficeController.store)


export default router; 