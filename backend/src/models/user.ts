import { model, Schema } from 'mongoose';
import { IUser } from '../types/user';
const userSchema:Schema = new Schema(
    {
        name: {
            type: String,
            default: ""
        },
        status: {
            type: String,
            default: ""
        },
        score: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)
export default model<IUser>('User',userSchema)