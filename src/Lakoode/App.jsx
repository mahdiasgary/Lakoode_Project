import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/globalStyles.css";
import { useStateContext } from "./contextProvider/ContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nprogress from "nprogress";
import Routs from "./Routs";
import ScrollToTop from "./ScrollToTop";
const App = () => {
  const { setIsDarkMode, IsDarkMode } = useStateContext();
  const [isSearchItemsShow, setIsSearchItemsShow] = useState(false);
  const [mode, setMode] = useState("dark");
  const [openMenu, setOpenMenu] = useState(false);
  let location = window.location;
  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    <BrowserRouter>
      <ToastContainer theme="dark" />
      <Routs />
    </BrowserRouter>
  );
};

export default App;
