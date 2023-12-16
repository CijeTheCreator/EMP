import IUsersRepository from './interfaces/IUsersRepository';
import User from '../models/User';

class UsersRepository implements IUsersRepository{

    getAllUsers(): User[] {
        return [
            new User("Sanuja", 25),
            new User("John", 23)
        ];
    }
}

export default UsersRepository;