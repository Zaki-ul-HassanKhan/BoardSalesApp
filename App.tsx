import React from "react";
import AppNav from "./src/components/navigation/AppNav";
import { AuthProvider } from "./src/components/context/AuthContext";
import { View } from "native-base";

export default function App() {

  return (
       <AuthProvider>
        <AppNav />
        </AuthProvider>
  );
}