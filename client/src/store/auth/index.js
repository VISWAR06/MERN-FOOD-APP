import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  isLoading: false,
  user: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {}
  }
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
