import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstNumber: 0,
    secondNumber: 0
}

export const counterSlice = createSlice({
    //name ini digunakan nanti untuk debugging
    name: 'counter',

    //state yg dibikin di awal oleh redux
    initialState,

    // redux toolkit akan membuatkan action + reducer secara otomatis sehingga kita ibaratnya bisa mutating (karena pake Immer library) yang sebenernya kita tidak mutate state yg harusnya sifatnya immutable
    reducers: {
        firstNumberIncrement: (state) => {
            state.firstNumber += 1
        },
        secondNumberIncrement: (state) => {
            state.secondNumber += 1
        },
        firstNumberDecrement: (state) => {
            state.firstNumber -= 1
        },
        secondNumberDecrement: (state) => {
            state.secondNumber -= 1
        },
        resetAllNumber: (state) => {
            state.firstNumber = initialState.firstNumber
            state.secondNumber = initialState.secondNumber
        }
    },
})

// Action creators are generated for each case reducer function
export const { firstNumberIncrement, secondNumberIncrement, firstNumberDecrement, secondNumberDecrement, resetAllNumber } = counterSlice.actions

export default counterSlice.reducer