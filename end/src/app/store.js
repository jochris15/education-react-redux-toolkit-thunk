// disini kita akan membuat storenya dan memasang reducer dari slice yang kita buat
import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counter-slice'
import todos from '../features/todos/todos-slicer'

export default configureStore({
    reducer: {
        counter,
        todos
    }
})