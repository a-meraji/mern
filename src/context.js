import React, { useContext, useReducer, useState, useEffect } from "react";
import Auth from "./auth";
const ContextObj = React.createContext();

const ProviderFunction = ({ children }) => {
  // dynamic home path
  const [homePath, setHomePath] = useState(process.env.PUBLIC_URL + "/");
  // showing side baror not
  const [sideBar, setSideBar] = useState(false);

  // Auth condition
  const [isAuth, setIsAuth] = useState(Auth.getAuth());
  const LogIn = () => {
    Auth.authenticate();
    setIsAuth(Auth.getAuth());
  };
  const LogOut = () => {
    Auth.signout();
    setIsAuth(Auth.getAuth());
  };

  //category color
  const [catColor, setCatColor] = useState("var(--react-blue)");

  return (
    <ContextObj.Provider
      value={{
        homePath,
        sideBar,
        setSideBar,
        isAuth,
        LogIn,
        LogOut,
        catColor,
        setCatColor,
      }}
    >
      {children}
    </ContextObj.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(ContextObj);
};

export { ContextObj, ProviderFunction };
