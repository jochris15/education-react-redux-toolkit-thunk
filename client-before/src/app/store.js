import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counterSlice'
import todo from '../features/todo/todoSlice'

export default configureStore({
    reducer: {
        counter,
        todo
    }
})