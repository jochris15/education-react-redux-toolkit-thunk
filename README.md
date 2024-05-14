# Redux Toolkit
[Dokumentasi RTK](https://redux-toolkit.js.org/)

Seperti yang kalian lihat dari dokumentasi diatas, redux toolkit membantu kita dalam penggunaan redux dikarenakan penggunaan redux manual memiliki beberapa concern yaitu :
- "Configuring a Redux store is too complicated"
- "I have to add a lot of packages to get Redux to do anything useful"
- "Redux requires too much boilerplate code"


# Usage Summary
[Dokumentasi Quick-start RTK](https://redux-toolkit.js.org/tutorials/quick-start)

# How to handle asynchronus function in redux toolkit?
Caranya dengan memanfaatkan thunk, apa itu thunk? simplenya, thunk itu sebuah **middleware** yg digunakan untuk mendelay sebuah kalkukasi, nah pemanfaatan thunk di redux ini adalah untuk menghandle **proses asynchronus** dikarenakan action dalam redux hanya boleh menerima **pure function**

[Dokumentasi quick start menggunakan thunk](https://codesandbox.io/p/sandbox/github/reduxjs/redux-essentials-counter-example/tree/master/?file=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.js&from-embed=)
```js

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
```