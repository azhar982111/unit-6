import { createContext, useState } from "react";

// CPC
export const AuthContext = createContext();

// Provide - 1

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
