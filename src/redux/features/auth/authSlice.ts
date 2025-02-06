import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the state
interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
}

// Define the type for the User (adjust based on your actual user model)
export interface User {
  id: string;
  name: string;
  email: string;
  type: "customer" | "beautician";
  phone?: string;
  profile?: string;
  timeSlotIds?: string[]
  bio?: string;
  image?: string;
}

// Define the initial state with the type
const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: true,
};

// Create the slice with typed state and actions
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ user: User }>) {
      state.user = action.payload.user;
      state.isLoading = false;
    },
    setLogin(state, action: PayloadAction<{ user: User; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
    },
  },
});

// Export the actions and reducer
export const { setUser, setLogin } = authSlice.actions;
export default authSlice.reducer;