import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface User {
  _id: string;
  ipAddress: string;
  alignment: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserAction: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoadingAction(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
      state.error = null;
    },
    setErrorAction(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateUserAction(state, action: PayloadAction<User>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
      }
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setUserAction, setLoadingAction, setErrorAction, updateUserAction } = userSlice.actions;

export default userSlice;
