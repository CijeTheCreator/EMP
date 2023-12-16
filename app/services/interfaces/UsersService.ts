import User from "../../models/User";

interface IUsersService {
    getAllUsers(): User[]; 
}

export default IUsersService;