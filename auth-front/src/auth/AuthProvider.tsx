import { ReactNode, createContext, useContext, useState } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider({ children }: AuthProviderProps) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;

}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}