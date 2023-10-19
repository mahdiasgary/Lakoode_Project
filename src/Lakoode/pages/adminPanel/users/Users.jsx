import React, { useCallback, useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import UsersItem from "./UsersItem";
import { BsArrowDown } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";

import {
  useGetUsersListInAdminPanelQuery,
  useRemoveUserMutation,
} from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import LoadingAdminListItem from "../../../common/LoadingAdminListItem";
import axios from "axios";
import { toast } from "react-toastify";
import Pagenation from "../../../commom/Pagenation";
// import ToolTip from "../../../common/ToolTip";
const Users = ({ history }) => {
  // const { data, isFetching, isLoading, error } =
  // useGetUsersListInAdminPanelQuery();
  const [data, setData] = useState();
  const [data2, setData2] = useState([]);
  console.log(data);
  const [removeUser] = useRemoveUserMutation();
  const [sort, setsort] = useState(["createdDate", true, true]);
  const [search, setSearch] = useState("");
  const [takj, settakh] = useState("");
  const [mobileTaKH, setmobileTaKH] = useState("");

  const [correctPage, setCorrectPage] = useState(1);
 

  useEffect(() => {
    axios
      .get("https://localhost:7103/api/Admin/User/GetDisabledUserList", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((r) => setData2(r.data.data));
  
      axios
        .get(
          `https://localhost:7103/api/Admin/User/GetUserList?searchKey=${search}&page=${correctPage}`,
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((r) => setData(r.data));
    
  }, [correctPage]);
  useEffect(() => {
    axios
      .get("https://localhost:7103/api/Admin/User/GetDisabledUserList", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      })
      .then((r) => setData2(r.data.data));
  
      axios
        .get(
          `https://localhost:7103/api/Admin/User/GetUserList?searchKey=${search}&page=${correctPage}`,
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((r) => setData(r.data));
    
  }, [search]);

  const disscountHand = () => {
    const formData = new FormData();
    formData.append("Mobile", mobileTaKH);
    formData.append("OffPrice", takj);
    formData.append("IsSingleMessage", true);
    axios({
      method: "post",
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
      url: `https://localhost:7103/api/Admin/User/SendMessage`,
      data: formData,
    })
      .then(function (response) {
        if (response.data.isSuccessFull) {
          toast.success(`کد تخفیف به ${mobileTaKH} ارسال شد! `, {
            autoClose: 1100,
            position: "top-left",
          });
          settakh("");
          setmobileTaKH("");
        }
      })
      .catch(function (response) {
        toast.error(`خطایی رخ داد مجددا تلاش نمایید`, {
          autoClose: 1100,
          position: "top-left",
        });
      });
  };

  // Math.ceil(data?.totalCount / 10)
  return (
    <div className=" w-full min-h-screen">
      <div className="flex justify-center lg:justify-start  lg:px-16  mt-20 mb-2">
        {/* <div className="flex justify-start  min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]"> */}
        <div className="flex  ">
          <div className="flex flex-col">
            <input
              value={mobileTaKH}
              onChange={(e) => setmobileTaKH(e.target.value)}
              type="text"
              placeholder="شماره موبایل"
              className="h-[45px] w-[220px] rounded-tr-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-none "
            />
            <input
              value={takj}
              onChange={(e) => settakh(e.target.value)}
              type="text"
              placeholder="مبلغ تخفیف (تومان)"
              className="h-[45px] w-[220px] text-btn placeholder:text-sm border-t-0 rounded-br-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-none "
            />
          </div>
          <div
            onClick={disscountHand}
            className=" bg-btn px-4 text-white flex hover:bg-blue-800 cursor-pointer   rounded-l-2xl font-bold "
          >
            <p className="self-center ">ارسال کد تخفیف</p>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="flex justify-center mt-10 mb-2">
        <div className="flex lg:flex-row flex-col lg:justify-between  min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div className="text-[23px] font-bold ">لیست کاربران</div>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="جستجو کد ملی ..."
              className="h-[45px] placeholder:text-sm w-[220px] rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
          <table className="rounded-xl   table-auto w-full border dark:border-0 ">
            <thead>
              <tr className="bg-[#1c1d21] h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
                <th className=" py-2  ">
                  <div className="flex justify-center cursor-pointer ">
                    <div className="">نام</div>
                  </div>
                </th>
                <th className=" py-2 w-[20%]  ">
                  <div className="flex justify-center cursor-pointer ">
                    <div className="">نام خانوادگی</div>
                  </div>
                </th>
                <th className="">کدملی</th>

                <th className="">
                  <div className="flex justify-center">
                    <div className="">موبایل</div>
                  </div>
                </th>
                <th className="">
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

                <th className="">عملیات</th>
              </tr>
            </thead>

            <tbody className="px-5 rounded-3xl">
              {data?.data &&
                data2 &&
                [...data?.data.concat(data2)]
                  // .filter((item) =>
                  //   (item?.nationalCode).toString().includes(search.toString())
                  // )
                  .sort((date1, date2) =>
                    !sort[1]
                      ? new Date(date1.createdDate.split("T")[0]) -
                        new Date(date2.createdDate.split("T")[0])
                      : new Date(date2.createdDate.split("T")[0]) -
                        new Date(date1.createdDate.split("T")[0])
                  )
                  .map((user, index) => (
                    <UsersItem
                      user={user}
                      key={index}
                      // forceUpdate={forceUpdate}
                      setmobile={setmobileTaKH}
                    />
                  ))}
            </tbody>
          </table>
         
          <Pagenation item={'کاربران'}  correctPage={correctPage} totalCount={data?.totalCount} setCorrectPage={setCorrectPage}/>
          {!data && <LoadingAdminListItem />}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Users);
