"use client";

import { persistor, store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default Providers;

// const UserProvider = () => {
//   const dispatch = useAppDispatch();
//   const { data, isLoading, isError } = useGetProfileQuery(undefined);
  
//   return <div></div>;
// };
