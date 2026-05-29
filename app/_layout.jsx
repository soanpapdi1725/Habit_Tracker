import { persistor, store } from "@/src/store/store";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="light" />

        <Stack
          screenOptions={{
            animation: "slide_from_bottom",
            animationDuration: 500,
            headerShown: false,
            contentStyle: { backgroundColor: "#0F0F14" },
          }}
        />
      </PersistGate>
    </Provider>
  );
}
