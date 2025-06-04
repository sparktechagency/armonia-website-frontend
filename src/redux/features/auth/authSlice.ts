import { TUniObject } from "@/type/index.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Define the type for the state
interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
}

export interface TSlot {
  id: string;
  start: string;
  end: string;
  index: number;
}
export type Service = {
  categoryName: string;
  createdAt?: string;
  id: string;
  name: string;
  price: number;
  description?: string;
  profileId?: string;
  time: number;
  category?: TUniObject;
};
export type Review = {
  id?: string;
  bookingId: string;
  profileId: string;
  rating: number;
  user?: { name: string; image?: string };
  review: string;
  createdAt?: string;
};
export type Category = "classic" | "elite" | "celebrity";
// Define the type for the User (adjust based on your actual user model)
export interface User {
  id: string;
  name: string;
  email: string;
  type: "customer" | "beautician";
  phone?: string;
  profile?: string;
  services: Service[];
  availableSlots?: {
    slot: TSlot;
  }[];
  reviews?: Review[];
  total5StarReviews?: number;
  reviewsAvgRating?: number;
  postalCode?: string;
  address?: string;
  reviewStatistics?: TUniObject;
  bio?: string;
  category?: Category;
  image?: string;
  profileId?: string;
  weekDays?: string[];
}

// Define the initial state with the type
const initialState: AuthState = {
  user: null,
  token: Cookies.get("token") || null,
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
      Cookies.set("token", action.payload.token, {
        expires: 365,
        secure: true,
        sameSite: "strict",
      });
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLoading = false;
      Cookies.remove("token");
    },
  },
});

// Export the actions and reducer
export const { setUser, setLogin, logout } = authSlice.actions;
export default authSlice.reducer;
