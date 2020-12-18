import {Router} from 'express';
import UserController from './app/controllers/UserController'
import HeadOfficeController from './app/controllers/HeadOfficeController'
import authMiddleware from './app/middlewares/authMiddleware'
const router = Router();

//User
router.post('/User/Create', UserController.store)

router.post('/User/Login', UserController.login)

router.put('/User/ChangePassword', UserController.changePassword)

router.put('/User/:Id/Update', authMiddleware, UserController.update)

router.delete('/User/:Id/Remove', authMiddleware, UserController.remove)

router.get('/User/List', authMiddleware, UserController.index)

router.get('/User/:Id/Detail', authMiddleware, UserController.detail)



//HeadOffice
router.post('/HeadOffice/Create', authMiddleware, HeadOfficeController.store)

router.get('/HeadOffice/List', authMiddleware, HeadOfficeController.index)

router.put('/HeadOffice/:Id/Update', authMiddleware, HeadOfficeController.update)

router.delete('/HeadOffice/:Id/Remove', authMiddleware, HeadOfficeController.remove)

router.get('/HeadOffice/:Id/Detail', authMiddleware, HeadOfficeController.detail)


export default router; 