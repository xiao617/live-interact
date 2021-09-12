import { model, Schema } from 'mongoose';
import { IRoom } from '../types/room';

const roomSchema:Schema = new Schema(
    {
        id: {
            type: String
        },
        roomId: {
            type: String,
            default: ""
        },
        question: {
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