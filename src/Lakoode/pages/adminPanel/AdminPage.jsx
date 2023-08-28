import React, { useEffect, useState } from "react";
import { useStateContext } from "../../contextProvider/ContextProvider";
import { Route, withRouter } from "react-router-dom";
import Users from "./users/Users";
import AdminSideBar from "../../components/admin/AdminSideBar/AdminSideBar";
import AdminNavBar from "../../components/admin/adminNavBar/AdminNavBar";
import nprogress from "nprogress";
import Dashboard from "./dashboard/Dashboard";
import Resevation from "./reservation/Resevation";
import VillaList from "./villaList/VillaList";
import VillaInfo from "./villaList/VillaInfo";
import AddMovies from "./movie/addMovie/AddMovies";
import PriceMake from "./reservation/PriceMake";
import VillaClander from "./villaClander/VillaClander";
const AdminPage = ({ history }) => {
  const [mode, setMode] = useState("dark");
  const [openMenu, setOpenMenu] = useState(false);
  const [isSearchItemsShow, setIsSearchItemsShow] = useState(false);
  const { IsDarkMode } = useStateContext();
  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [history.location.pathname]);

  return (
    <div
      className={`dark:text-textDark text-textLight  
    ${IsDarkMode ? "gradient-06" : "lightTheme"} `}
    >
      <div
        onClick={() => setOpenMenu(false)}
        className={`${
          !openMenu && "left-[-100%]"
        } fixed z-[51] w-full h-full bg-black lg:hidden backdrop-blur-sm dark:bg-opacity-70 bg-opacity-25 `}
      />
      <div className="flex">
        <div className="lg:sticky">
          <AdminSideBar
            mode={mode}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
            setMode={setMode}
          />
        </div>

        <div className="flex flex-col w-full">
          <AdminNavBar
            isSearch={isSearchItemsShow}
            setIsSearch={setIsSearchItemsShow}
            setMode={setMode}
            mode={mode}
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />{" "}
          <div>
            {/* <Route
              path={"/admin/reservation"}
              exact
              component={() => <Resevation />}
            /> */}
            <Route
              path={"/admin/addnewvilla"}
              exact
              component={() => <AddMovies />}
            />

            <Route
              path={"/admin/villaslist"}
              exact
              component={() => <VillaList />}
            />
            <Route
              path={"/admin/pricedetermination"}
              exact
              component={() => <PriceMake />}
            />
            <Route
              path={"/admin/calendar"}
              exact
              component={() => <VillaClander />}
            />
            {/* <Route path={"/admin/villainfo/:id"} exact component={() => <VillaInfo />} /> */}
            {/* <Route path={"/admin/villaslist/villainfo"}  component={() => <VillaInfo />} /> */}
            <Route path={"/admin/users"} exact component={() => <Users />} />
            <Route path={"/admin"} exact component={() => <Dashboard />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminPage);