import {Router} from 'express';

import IUsersRepository from '../repositories/interfaces/IUsersRepository';
import IUsersService from '../services/interfaces/UsersService';

import UsersController from '../controllers/UsersController';
import UsersRepository from '../repositories/UsersRepository';
import UsersService from '../services/UsersService';

const router: Router = Router();

// Dependancy Injection
const userRepository: IUsersRepository = new UsersRepository();
const userService: IUsersService = new UsersService(userRepository); 
const userController: UsersController = new UsersController(userService);

// Routes
router.get('/', userController.getAllUsers.bind(userController));

export default router;