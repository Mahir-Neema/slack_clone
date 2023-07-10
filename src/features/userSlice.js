import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from "../firebase";

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  try {
    const querySnapshot = await db.collection('userlist').get();
    const users = querySnapshot.docs.map((doc) => doc.data());
    return users;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addUser } = userSlice.actions;
export const selectUsers = (state) => state.user;

export default userSlice.reducer;
