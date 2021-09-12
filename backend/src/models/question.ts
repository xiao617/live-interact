import { model, Schema } from 'mongoose'
import { IQuestion } from '../types/question'

const questionSchema:Schema = new Schema(
    {
        id: {
            type: String
        },
        question: {
            type: String,
            default: ""
        },
        choices: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
)
export default model<IQuestion>('Question',questionSchema)