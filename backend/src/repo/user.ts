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
    async checkUser(userInfo: IUser): Promise<string>{
        const res = await User.find({name:userInfo.name});
        //console.log("Check Result: ",res);
        if(res.length === 0){
            return "can_create";
        }
        else if(res[0].password === userInfo.password)
        {
            return "login_success";
        }
        return "fail";
    }
    async getUser(userInfo: IUser): Promise<IUser | null>{
        const res = await User.find({name: userInfo.name})
        return res.length === 0? ({name:"",password:""} as IUser):res[0];
    }
    async postUser(userInfo: IUser): Promise<IUser>{
        const res = await User.create(userInfo);
        return res;
    }
}
export {UserRepoImpl}