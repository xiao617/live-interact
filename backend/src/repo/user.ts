import {IUser} from './../types/user';
import User from './../models/user';

interface UserRepo{
    postUser(userInfo: IUser): Promise<IUser>
}
class UserRepoImpl implements UserRepo {
    private constructor(){}
    static of(): UserRepoImpl{
        return new UserRepoImpl();
    }
    async postUser(userInfo: IUser): Promise<IUser>{
        const res = await User.create(userInfo);
        return res;
    }
}
export {UserRepoImpl}