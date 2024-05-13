// Di sini kita akan menggunakan slice dari redux toolkit untuk membuat reducernya secara otomatis
import { createSlice } from '@reduxjs/toolkit'

// Di sini kita akan mendeklarasikan state awal yang digunakan oleh reducer
const initialState = {
    firstNumber: 0,
    secondNumber: 0,
};

// Di sini kita akan membuat slicenya
// slice adalah kumpulan data yang digunakan dalam reducer

// Redux menggunakan slice untuk membuat reducer secara otomatis
// dan menyediakan seluruh fungsi / action + action creator yang dibutuhkan

// secara OTOMATIS !
export const counterSlice = createSlice({
    // Nama ini digunakan untuk keperluan debugging
    name: "counter",

    // initialState ini merupakan state awal yang akan dimasukkan ke dalam reducer
    initialState,

    // Reducer ini adalah seluruh fungsi yang digunakan untuk mengubah state di dalam redux
    // Walaupun state seharusnya bersifat immutable di dalam reducer, namun karena di balik
    // layarnya slice ini sudah menggunakan "immer library", maka SEOLAH-OLAH kode dapat dibuat
    // secara mutable (boleh diassign), padahal di balik layarnya tetap immutable !
    reducers: {
        firstNumberIncrement(state) {
            state.firstNumber += 1;
        },
        secondNumberIncrement(state) {
            state.secondNumber += 1;
        },
        firstNumberDecrement(state) {
            state.firstNumber -= 1;
        },
        secondNumberDecrement(state) {
            state.secondNumber -= 1;
        },
        allNumberReset(state) {
            state.firstNumber = initialState.firstNumber;
            state.secondNumber = initialState.secondNumber;
        },
    }
})

// Secara otomatis dari slice yang dibuat akan menyediakan action creatornya.
export const {
    firstNumberIncrement,
    firstNumberDecrement,
    secondNumberIncrement,
    secondNumberDecrement,
    allNumberReset,
} = counterSlice.actions;


// Secara otomatis dari slice yang dibuat juga menyediakan reducernya.
export default counterSlice.reducer;