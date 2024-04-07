import React, { useContext } from "react";
import { PropsWithChildren, useState } from "react";

type AuthContextType = {
    isLoading: boolean,
    setIsLoading: Function,
    userToken: string,
    setUserToken: Function
}

export const AuthContextDefaults: AuthContextType = {
    isLoading: false,
    setIsLoading: () => { },
    userToken: "I am Token hehrehr",
    setUserToken: () => { }
}
const AuthContext = React.createContext<AuthContextType>(AuthContextDefaults);
export function useAuthContext(){
    return useContext(AuthContext);
}
export function AuthProvider({ children }: PropsWithChildren) {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState("I am Token hehrehr");
    const value = { isLoading, setIsLoading, userToken, setUserToken };
     return (
<AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>
     )
}