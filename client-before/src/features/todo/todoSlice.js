import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    todos: [],
    loading: false,
    error: ""
}

export const todoSlice = createSlice({
    //name ini digunakan nanti untuk debugging
    name: 'todo',

    //state yg dibikin di awal oleh redux
    initialState,

    // redux toolkit akan membuatkan action + reducer secara otomatis sehingga kita ibaratnya bisa mutating (karena pake Immer library) yang sebenernya kita tidak mutate state yg harusnya sifatnya immutable
    reducers: {
        // kita akan membuat 3 proses
        // Pending -> nungguin hasil request , loading
        // Succcess -> berhasil mendapatkan request
        // Reject -> gagal mendapatkan request, error
        fetchPending: (state) => {
            state.loading = true
        },
        fetchSuccess: (state, action) => {
            console.log(action);
            state.todos = action.payload
            state.loading = false
        },
        fetchReject: (state, action) => {
            console.log(action);
            state.error = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { fetchPending, fetchSuccess, fetchReject } = todoSlice.actions

// menggunakan yang namanya thunk, karena tadi kita hanya boleh ubah state kita menggunakan pure function, sedangkan kalo proses axios itu promise, gaboleh.
export const fetchAsync = () => async (dispatch) => {
    try {
        dispatch(fetchPending())
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");

        dispatch(fetchSuccess(data))
    } catch (error) {
        //pasang swal disini
        dispatch(fetchReject(error.message))
    }
}

export default todoSlice.reducer