import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetLoginStatusQuery } from "../redux/services/movieDatabase";
import Cookies from "js-cookie";
import { use } from "i18next";
import axios from "axios";

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
  const { data } = useGetLoginStatusQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );

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
  const [loginStatus, setloginStatus] = useState(false);
  // const [userInfo,setUserInf]=useState()

  axios
    .get("https://localhost:7103/api/Account/Login", { withCredentials: true })
    .then((r) => {
      if (r.data.isSuccessfull) {
        setloginStatus(true);
        // setUserInf(r.data)
      }
      if (!r.data.isSuccessfull) {
        setloginStatus(false);
      }
    });
  return (
    <StateContext.Provider
      value={{
        
        loginStatus,
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
