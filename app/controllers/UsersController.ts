import {Request, Response, NextFunction} from 'express';
import IUsersService from '../services/interfaces/UsersService';

class UsersController {
    private readonly _userService: IUsersService;

    constructor(userService: IUsersService) {
        this._userService = userService;
    }

    getAllUsers(req: Request, res: Response, next: NextFunction): Response {
        const users = this._userService.getAllUsers();
        return res.json(users);
    }
}

export default UsersController;


