import { createSlice } from '@reduxjs/toolkit';
// Redux Toolkit'ten 'createSlice' fonksiyonunu import ediyoruz. 
// Bu fonksiyon, belirli bir durum (state) ve bu durumla ilgili eylemler (reducers) oluşturmak için kullanılır.

const initialState = {
    currentUser: null,  // Kullanıcının giriş yapmış olduğu kullanıcı bilgisini tutar. Başlangıçta 'null' olarak ayarlanmıştır.
    error: null,        // Giriş işlemi sırasında oluşabilecek hataları tutar. Başlangıçta 'null' olarak ayarlanmıştır.
    loading: false,     // Giriş işleminin devam edip etmediğini belirtir. Başlangıçta 'false' olarak ayarlanmıştır.
};
// 'initialState', slice'ın başlangıç durumunu tanımlar.

const userSlice = createSlice({
    name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
        state.loading = true;
      },
      deleteUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      deleteUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
      signOutUserStart: (state) => {
        state.loading = true;
      },
      signOutUserSuccess: (state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = null;
      },
      signOutUserFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },
  },
});


export const {
    signInStart,
    signInSuccess,
    signInFailure,
    updateUserFailure,
    updateUserSuccess,
    updateUserStart,
    deleteUserFailure,
    deleteUserSuccess,
    deleteUserStart,
    signOutUserFailure,
    signOutUserSuccess,
    signOutUserStart,
  } = userSlice.actions;

export default userSlice.reducer;
// Slice için oluşturulan reducer'ı dışa aktarır. Bu reducer, store'a eklenir ve durumu yönetir.
