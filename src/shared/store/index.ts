import { configureStore } from "@reduxjs/toolkit";
import { statisticApi } from "./queries/getData";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
      // Add the API slice to the store
      [statisticApi.reducerPath]: statisticApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(statisticApi.middleware),
  });

  setupListeners(store.dispatch)