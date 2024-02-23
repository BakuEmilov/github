import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {},
  });
};

// Определите тип хранилища make
export type AppStore = ReturnType<typeof makeStore>;
// Выведите типы `Корневое состояние` и `Отправка приложения` из самого магазина
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
