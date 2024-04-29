import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user";
import userApi from "../../apis/user";
import { RootState } from "../store";

const initialState: IUserState = {
  _id: "",
  username: "",
  createdAt: "",
  alignment: "",
  breeds: [],
  loading: false,
  error: "",
};

// Action Types

const SET_USERNAME = "SET_USERNAME";
const SET_ALIGNMENT = "SET_ALIGNMENT";
const ADD_BREED = "ADD_BREED";
const REMOVE_BREED = "REMOVE_BREED";

// Action Creators

export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setAlignment = (alignment: string) => ({
  type: SET_ALIGNMENT,
  payload: alignment,
});

export const addBreed = (value: string) => ({
  type: ADD_BREED,
  payload: value,
});

export const removeBreed = (value: string) => ({
  type: REMOVE_BREED,
  payload: value,
});

// Thunks

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: any, thunkApi) => {
    try {
      // get persisted user state
      const user = (thunkApi.getState() as RootState).user as any;
      return await userApi.updateUser(user.user, data);
    } catch (error) {
      return thunkApi.rejectWithValue({ error: "user not updated" });
    }
  }
);

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUsernameAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        username: action.payload,
      };
    },
    setAlignmentAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        alignment: action.payload,
      };
    },
    addBreedAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        breeds: [...state.breeds, action.payload],
      };
    },
    removeBreedAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        breeds: state.breeds.filter((breed) => breed !== action.payload),
      }
    },
    updateUserAction: (state, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
  },
});

export const {
  updateUserAction,
  setUsernameAction,
  setAlignmentAction,
  addBreedAction,
  removeBreedAction,
} = userSlice.actions;

export default userSlice.reducer;
