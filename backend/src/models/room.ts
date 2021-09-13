import { model, Schema } from 'mongoose';
import { IRoom } from '../types/room';

const roomSchema:Schema = new Schema(
    {
        roomId: {
            type: String,
            default: ""
        },
        questions: {
            type: Array,
            default: []
        },
        owner: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
)
export default model<IRoom>('Room',roomSchema)