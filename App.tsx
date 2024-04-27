import React from "react";
import AppNav from "./src/components/navigation/AppNav";
import { AuthProvider } from "./src/components/context/AuthContext";
import { View } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {

  return (
       <AuthProvider>
        
    <GestureHandlerRootView>
        <AppNav />
        
        </GestureHandlerRootView>
        </AuthProvider>
  );
}