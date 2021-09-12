import { model, Schema } from 'mongoose'
import {IOption} from "./../types/option";

const optionSchema:Schema = new Schema(
    {
        id: {
            type: String
        },
        option: {
            type: String,
            default: ""
        },
        selectList: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
)
export default model<IOption>('Option',optionSchema)
