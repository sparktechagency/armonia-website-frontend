"use client";
import { useGetProfileQuery } from "@/redux/features/auth/authApi";
import { setLogin, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { persistor, store } from "@/redux/store";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>{children}</AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default Providers;

const AuthProvider = ({ children }: ProvidersProps) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useGetProfileQuery(undefined);
  // console.log({ data, isLoading, isError })
  useEffect(() => {
    const profile = data?.data?.profile;
    let userinfo = { ...data?.data };
    delete userinfo?.profile;
    dispatch(
      setUser({
        user: { ...userinfo, ...profile }, // ✅ Merge userinfo and profile
      })
    );
  }, [data]);
  if (isLoading) {
    return <h3>Loading.....</h3>;
  }
  return children;
};
