import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Explore from "./pages/Explore";

import "./styles/globalStyles.css";
import FooterMenu from "./components/mobile-footer-menu/FooterMenu";
import { useStateContext } from "./contextProvider/ContextProvider";
import AdminPage from "./pages/adminPanel/AdminPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./pages/profile/profile/UserProfile";
import LogInPage from "./pages/login singUp/login/LogInPage";
import SingupPage from "./pages/login singUp/singup/SingupPage";
import nprogress from "nprogress";
import ForgotPasswordPage from "./pages/login singUp/login/ForgotPasswordPage";
import Routs from "./Routs";
const App = () => {
  const { setIsDarkMode, IsDarkMode } = useStateContext();
  const [isSearchItemsShow, setIsSearchItemsShow] = useState(false);
  const [mode, setMode] = useState("dark");
  const [openMenu, setOpenMenu] = useState(false);
  let location = window.location;
  console.log(location.pathname);
  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  return (
    <BrowserRouter>
      <ToastContainer theme="dark" />
     <Routs/>
    </BrowserRouter>
  );
};

export default App;
