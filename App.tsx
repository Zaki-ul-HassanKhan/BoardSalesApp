import React from "react";
import AppNav from "./src/components/navigation/AppNav";
import { Text, View } from "react-native";
import { AuthProvider } from "./src/components/context/AuthContext";

export default function App() {
  
  return (
       <AuthProvider>
        <AppNav />
        </AuthProvider>
        // <View><Text>HIII</Text></View>
  );
}