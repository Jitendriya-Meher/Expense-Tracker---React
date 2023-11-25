import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [];

const transactionSlice = createSlice({
    name:"transaction",
    initialState,
    reducers:{
        addTran:(state,action) => {
            console.log(action);
            state.unshift({
                ...action.payload,
                id:nanoid()
            });
        },
        deleteTrans:(state, action) => {
            return state.filter((user) =>(
                user.id !== action.payload
            ))
        }
    }
});

export const { addTran, deleteTrans} = transactionSlice.actions;
export default transactionSlice.reducer;
