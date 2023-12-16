import IUsersRepository from "../repositories/interfaces/IUsersRepository";
import User from "../models/User";

class UsersService {
    private readonly _userRepository: IUsersRepository;

    constructor(userRepository: IUsersRepository) {
        this._userRepository = userRepository;
    }

    getAllUsers(): User[] {
        return this._userRepository.getAllUsers();
    }
}

export default UsersService;