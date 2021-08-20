import React, { useContext, useReducer, useState, useEffect } from "react";
const ContextObj = React.createContext();

const ProviderFunction = ({ children }) => {
  // dynamic home path
  const [homePath, setHomePath] = useState(process.env.PUBLIC_URL + "/");
  // showing side baror not
  const [sideBar, setSideBar] = useState(false);

  // Auth condition
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = async()=>{
    try{
      const res = await fetch('/checkauth');
      const data = await res.json();
      if(data.isValid){
        setIsAuth(true);
        return true;
      }else{
      setIsAuth(false);
        return false;
      }
    }catch(err){
      console.log(err);
      setIsAuth(false);
      return false;
    }   
  }

  //category color
  const [catColor, setCatColor] = useState("var(--react-blue)");

  return (
    <ContextObj.Provider
      value={{
        homePath,
        sideBar,
        setSideBar,
        isAuth,
        checkAuth,
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
