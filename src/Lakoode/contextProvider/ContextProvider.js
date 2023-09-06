import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetLoginStatusQuery } from "../redux/services/movieDatabase";
import Cookies from "js-cookie";
import { use } from "i18next";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [IsDarkMode, setIsDarkMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState(true);
  const [rtl, setRtl] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [selectedSideBarItem, setSelectedSideBarItem] = useState("dashboard");
  const [iconRotate, setIconRotate] = useState(["", false]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isLogin,setisLogin]=useState(false)
  const {data}=useGetLoginStatusQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
// console.log(data)
  // useEffect(() => {
  //   const handleResize = () => setWindowSize(window.innerWidth);

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);


  useEffect(() => {
    const screenMode = localStorage.getItem("DarkMode");
    setIsDarkMode();
    if (screenMode === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (!IsDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("DarkMode", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("DarkMode", "dark");
    }
  }, [IsDarkMode]);

  const setMode = (prob) => {
    setIsDarkMode(prob);
  };
  const [loginStatus,setloginStatus]=useState()

  return (
    <StateContext.Provider
      value={{
        loginStatus,
        isLogin,setisLogin,
        windowSize,
        selectedSideBarItem,
        setSelectedSideBarItem,
        rtl,
        IsDarkMode,
        activeMenu,
        screenSize,
        setScreenSize,
        userProfile,
        notification,
        setUserProfile,
        setNotification,
        setActiveMenu,
        setMode,
        iconRotate,
        setIconRotate,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
