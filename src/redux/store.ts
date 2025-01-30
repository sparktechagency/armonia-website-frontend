import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/users/authSlice'
import { baseApi } from './api/baseApi'



export const makeStore = () => {
    return configureStore({
        reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
            auth: authReducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']



// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './features/users/authSlice'
// import { baseApi } from './api/baseApi'
// import {
//     persistReducer,
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from "redux-persist";
//   import storage from "redux-persist/lib/storage";

//   const persistConfig = {
//     key: "auth",
//     storage,
//   };
//   const persistedReducer = persistReducer(persistConfig, authReducer);



// export const makeStore = () => {
//     return configureStore({
//         reducer: {
//             [baseApi.reducerPath]: baseApi.reducer,
//             auth: persistedReducer
//         },
//         middleware: (getDefaultMiddlewares) =>
//             getDefaultMiddlewares({
//               serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//               },
//             }).concat(baseApi.middleware),
//     })
// }

// export type AppStore = ReturnType<typeof makeStore>
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']

// export const persistor = persistStore(makeStore);