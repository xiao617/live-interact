import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface UserState {
    name: string;
    id: string;
    score: number;
    status: 'admin' | 'user' | 'visitor';
}
  
const initialState: UserState = {
    name: '',
    id: '',
    score: 0,
    status: 'visitor',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        userLogin: (state,action: PayloadAction<UserState>) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.status = 'user';
            
        }
    }
});

export const {userLogin} = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;