import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { rootReducer } from "./root/rootSlice";
import { roomsReducer } from "./rooms/roomsSlice";
import { mainReducer } from "./main/mainSlice";
import { accordionReducer } from "./accordion/accordionSlice";

const persistConfig = {
    key: "root",
    storage,
  };

const store = configureStore({
    reducer: {
        service: persistReducer(persistConfig, rootReducer),
        rooms:persistReducer(persistConfig,roomsReducer),
        main:persistReducer(persistConfig,mainReducer),
        accordion:persistReducer(persistConfig,accordionReducer),

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
  });

  export const persistor = persistStore(store);

  export default store;
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;