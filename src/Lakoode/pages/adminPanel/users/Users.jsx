import React, { useCallback, useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import UsersItem from "./UsersItem";
import { BsArrowDown } from "react-icons/bs";
import {
  useGetUsersListInAdminPanelQuery,
  useRemoveUserMutation,
} from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import LoadingAdminListItem from "../../../common/LoadingAdminListItem";
import axios from "axios";
// import ToolTip from "../../../common/ToolTip";
const Users = ({ history }) => {
  const [, updateState] = useState();
  // const { data, isFetching, isLoading, error } =
  // useGetUsersListInAdminPanelQuery();
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const [removeUser] = useRemoveUserMutation();
  const [sort, setsort] = useState(["createdDate", true, true]);
  const [search, setSearch] = useState("");
  const [searc, setSearc] = useState(false);

  useEffect(()=>{
    axios
      .get("https://localhost:7103/api/User/GetUserList")
      .then((r) => setData(r.data.data));
    axios
      .get('https://localhost:7103/api/User/GetDisabledUserList')
      .then((r) => setData2(r.data.data));

    },[])
    console.log(data)

 
  const [mobileTaKH, setmobileTaKH] = useState("");
  return (
    <div className=" w-full min-h-screen">
      <div className="flex justify-center mt-20 mb-2">
        <div className="flex   min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div>
            <input
              value={mobileTaKH}
              onChange={(e) => setmobileTaKH(e.target.value)}
              type="text"
              placeholder="شماره موبایل"
              className="h-[45px] w-[220px] rounded-r-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-none "
            />
          </div>
          <div className=" bg-btn px-4 text-white flex hover:bg-blue-800 cursor-pointer   rounded-l-2xl font-bold ">
            <p className="self-center ">ارسال کد تخفیف</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 mb-2">
        <div className="flex justify-between  min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div className="text-[23px] font-bold ">لیست کاربران</div>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="جستجو..."
              className="h-[45px] w-[220px] rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
          <table className="rounded-xl   table-auto w-full border dark:border-0 ">
            <thead>
              <tr className="bg-[#1c1d21] h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
                <th className=" py-2 w-[20%] ">
                  <div className="flex justify-center cursor-pointer ">
                    <div className="">نام</div>
                  </div>
                </th>
                <th className=" py-2 w-[20%] ">
                  <div className="flex justify-center cursor-pointer ">
                    <div className="">نام خانوادگی</div>
                  </div>
                </th>
                <th className="w-[20%]">کدملی</th>

                <th className="w-[20%]">
                  <div className="flex justify-center">
                    <div className="">موبایل</div>
                  </div>
                </th>
                <th className="w-[10%]">
                  <div
                    onClick={() => {
                      setsort(["createdDate", !sort[1], true]);
                    }}
                    className="flex justify-center"
                  >
                    <div className="">تاریخ</div>
                    <div
                      className={`self-center  cursor-pointer ${
                        sort[0] === "createdDate"
                          ? "text-white"
                          : "text-[#6d7077]"
                      } ${sort[1] && "rotate-180"} duration-200 `}
                    >
                      <BsArrowDown />
                    </div>
                  </div>
                </th>
                <th className="w-[10%]">عملیات</th>
              </tr>
            </thead>

            <tbody className="px-5 rounded-3xl">
              {(data && data2 )&&
                [...data.concat(data2)]
                  .filter((item) => item?.nationalCode?.includes(search))
                  .sort((date1, date2) =>
                    !sort[1]
                      ? new Date(date1.createdDate) -
                        new Date(date2.createdDate)
                      : new Date(date2.createdDate) -
                        new Date(date1.createdDate)
                  )
                  .map((user) => (
                    <UsersItem
                      user={user}
                      key={user.mobile}
                      // forceUpdate={forceUpdate}
                      setmobile={setmobileTaKH}
                    />
                  ))}
            </tbody>
          </table>
          {!data && <LoadingAdminListItem />}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Users);
