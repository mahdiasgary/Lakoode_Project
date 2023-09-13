import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import LogInPage from "./pages/login singUp/login/LogInPage";
import ForgotPasswordPage from "./pages/login singUp/login/ForgotPasswordPage";
import SingupPage from "./pages/login singUp/singup/SingupPage";
import AdminPage from "./pages/adminPanel/AdminPage";
import { useStateContext } from "./contextProvider/ContextProvider";
import Navbar from "./components/navbar/Navbar";
import Explore from "./pages/Explore";
import UserProfile from "./pages/profile/profile/UserProfile";
import nprogress from "nprogress";
import VillaPagee from "./pages/villaPage/VillaPage";
import Roles from "./Roles";

const Routs = ({ history }) => {
  const { setIsDarkMode, IsDarkMode } = useStateContext();
  const [isSearchItemsShow, setIsSearchItemsShow] = useState(false);
  const [mode, setMode] = useState("dark");
  const [openMenu, setOpenMenu] = useState(false);
  let location = window.location;
  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [history.location.pathname]);
  return (
    <Switch>
      <div
        className={`dark:text-textDark text-textLight   
        ${IsDarkMode ? "gradient-06" : "lightTheme"} `}
      >
        <Route path={"/admin"} exact component={() => <AdminPage />} />
        <Route path={"/admin/:id"} exact component={() => <AdminPage />} />
        {/* <div className="bg-[#f9f9f9] dark:bg-[#282a37]"> */}
        <Route
          path={"/login"}
          exact
          component={() => (
            <LogInPage
              setMode={setMode}
              mode={mode}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          )}
        />
        <Route
          path={"/login/:id"}
          exact
          component={() => (
            <ForgotPasswordPage
              setMode={setMode}
              mode={mode}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          )}
        />
          <Route
          path={"/forgotpassword"}
          exact
          component={() => (
            <ForgotPasswordPage
              setMode={setMode}
              mode={mode}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              login={true}
            />
          )}
        />

        <Route
          path={"/singup"}
          exact
          component={() => (
            <SingupPage
              setMode={setMode}
              mode={mode}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          )}
        />
        <Route path={"/villapage/:id"} exact component={() => <VillaPagee />} />

        <div className="">
          <div
            onClick={() => setIsSearchItemsShow(false)}
            className={`${
              !isSearchItemsShow && "hidden"
            } fixed z-40 w-full h-full bg-black  backdrop-blur-sm dark:bg-opacity-60 bg-opacity-25 `}
          />
          <div
            onClick={() => setOpenMenu(false)}
            className={`${
              !openMenu && "left-[-100%]"
            } fixed z-[51] w-full h-full bg-black lg:hidden backdrop-blur-sm dark:bg-opacity-70 bg-opacity-25 `}
          />
          <div
            className={`dark:text-textDark text-textLight   
        ${IsDarkMode ? "gradient-06" : "lightTheme"} `}
          >
            {/* <FooterMenu setOpenMenu={setOpenMenu} openMenu={openMenu} /> */}

            <div className="flex">
              <div className=" w-full flex flex-col  ">
                <Route path={"/user"} exact component={() => <UserProfile />} />

                <Route
                  path={"/lakooderoles"}
                  exact
                  component={() => <Roles />}
                />
                <Route
                  path={"/"}
                  exact
                  component={() => (
                    <Explore openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  )}
                />

                <div className="bg-[#101018] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Switch>
  );
};

export default withRouter(Routs);
