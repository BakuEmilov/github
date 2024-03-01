import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./features/github/githubApi";
import { githubReducer } from "./features/github/githubSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [githubApi.reducerPath]: githubApi.reducer,
      github: githubReducer
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
