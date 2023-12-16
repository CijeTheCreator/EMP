import User from "../../models/User";

interface IUsersRepository {
    getAllUsers(): User[];
}

export default IUsersRepository;