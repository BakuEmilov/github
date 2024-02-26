import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./features/github/githubApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [githubApi.reducerPath]: githubApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(githubApi.middleware),
  });
};

// Определите тип хранилища make
export type AppStore = ReturnType<typeof makeStore>;
// Выведите типы `Корневое состояние` и `Отправка приложения` из самого магазина
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
