import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');

  const login = (userData) => {
    setIsLoggedIn(true);
    setUsername(userData.username);
    setIsAdmin(userData.isAdmin);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setIsAdmin(false);
  };

  const contextValue = {
    isLoggedIn,
    isAdmin,
    username,
    login,
    logout,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
