import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    todos: [],
    loading: false,
    error: ""
}

export const todoSlice = createSlice({
    name: 'todo', // untuk kepentingan debugging
    initialState,
    reducers: {
        fetchPending: (state) => {
            state.loading = true
            state.todos = initialState.todos
            state.error = initialState.error
        },
        fetchSuccess: (state, action) => {
            state.todos = action.payload
            state.loading = initialState.loading
            state.error = initialState.error
        },
        fetchFailed: (state, action) => {
            state.loading = initialState.loading
            state.todos = initialState.todos
            state.error = action.payload
        }
    },
})

export const fetchAsync = () => async (dispatch) => {
    try {
        dispatch(fetchPending())
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todo");

        dispatch(fetchSuccess(data))
    } catch (error) {
        console.log(error);

        dispatch(fetchFailed(error))
    }
}

// Action creators are generated for each case reducer function
export const { fetchPending, fetchSuccess, fetchFailed } = todoSlice.actions

export default todoSlice.reducer