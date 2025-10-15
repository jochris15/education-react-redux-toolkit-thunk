import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstNumber: 0,
    secondNumber: 0
}

export const counterSlice = createSlice({
    name: 'counter', // untuk kepentingan debugging
    initialState,
    reducers: {
        incrementFirstNumber: (state) => {
            state.firstNumber += 1
        },
        incrementSecondNumber: (state) => {
            state.secondNumber += 1
        },
        decrementFirstNumber: (state) => {
            state.firstNumber -= 1
        },
        decrementSecondNumber: (state) => {
            state.secondNumber -= 1
        },
        reset: (state) => {
            state.firstNumber = initialState.firstNumber
            state.secondNumber = initialState.secondNumber
        },
    },
})

// Action creators are generated for each case reducer function
export const { incrementFirstNumber, incrementSecondNumber, decrementFirstNumber, decrementSecondNumber, reset } = counterSlice.actions

export default counterSlice.reducer