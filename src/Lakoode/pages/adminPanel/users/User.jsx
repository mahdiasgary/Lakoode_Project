import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import axios from "axios";
import TraconeshItem from "./TraconeshItem";
const User = () => {
  const [selectedForChange, setSelectedForChange] = useState("r5");
  const usermobile = useLocation().search.split("?")[1];
  const [data, setData] = useState([]);
  const [sort, setsort] = useState(["createdDate", true, true]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
    
      .get(`https://localhost:7103/api/User/GetUserDetail?mobile=${usermobile}`,{withCredentials:true})
      .then((r) => setData(r.data.data));
  }, []);
  return (
    <div className="flex flex-col w-full ">
      <div className="flex">
        <h1 className="text-2xl self-center font-bold mx-5 mt-8 mb-8">کاربر</h1>
        <div className="self-cneter flex flex-col justify-center">
          {data.isDisabled && (
            <p className="text-red-500 rounded-xl bg-red-500 bg-opacity-20 px-5 py-2 mx-2 ">
              غیر فعال
            </p>
          )}
          {data.isAdmin && (
            <p className="text-blue-500 rounded-xl bg-blue-500 bg-opacity-20 px-5 py-2 mx-2 ">
              ادمین{" "}
            </p>
          )}
        </div>
      </div>

      <div className="md:flex w-full px-5 y7:px-10 xl:px-16">
        <div className="flex flex-wrap gap-3">
          <fieldset
            className={`flex border-[#787f98] border-opacity-40 flex-col justify-center border-b dark:rounded-none rounded-xl duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={`border-[#787f98] border-opacity-40 px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              نام{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{data.name}</p>
            </div>
          </fieldset>{" "}
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl border-[#787f98] border-opacity-40 duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              نام خانوادگی{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{data.lastName}</p>
            </div>
          </fieldset>{" "}
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl border-[#787f98] border-opacity-40 duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              موبایل{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{data.mobile}</p>
            </div>
          </fieldset>
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              کد ملی{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{data.nationalCode}</p>
            </div>
          </fieldset>
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              ایمیل{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{data.email}</p>
            </div>
          </fieldset>
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              تاریخ ثبت نام{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">
                {" "}
                {new Date(data.createdDate).toLocaleDateString("fa")}
              </p>
            </div>
          </fieldset>{" "}
          <fieldset
            className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
          >
            <legend
              className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
            >
              رمز عبور{" "}
            </legend>
            <div className="flex justify-between mb-1 ">
              <p className="self-center pl-3">{data.password}</p>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-8 md:self-center w-full  ">
        <div className="dark:bg-border bg-white dark:bg-opacity-40  rounded-3xl p-4  ">
          <div className="">
            <div className="flex justify-center  mb-2">
              <div className=" min-w-[85vw] flex justify-between max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]">
                <div className="text-[19px] self-center font-bold ">
                  لیست رزرو ها
                </div>
                <div>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="جستجو کد رهگیری..."
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
                      <th className=" py-2  ">
                        <div className="flex justify-center cursor-pointer ">
                          <div className="">کد رهگیری</div>
                        </div>
                      </th>
                      <th className=" py-2  ">
                        <div className="flex justify-center cursor-pointer ">
                          <div className="">ویلا </div>
                        </div>
                      </th>
                      <th className="">آیدی ویلا</th>
                      <th className="w-[20%]">
                        <div
                          onClick={() => {
                            setsort(["createdDate", !sort[1], true]);
                          }}
                          className="flex justify-center  text-sm"
                        >
                          <div className="">تاریخ سفارش</div>
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
                      <th className="">
                        <div className="flex justify-center  text-sm">
                          <div className="">تاریخ ورود</div>
                        </div>
                      </th>
                      <th className="">
                        <div className="flex justify-center text-sm">
                          <div className="">تاریخ خروج</div>
                        </div>
                      </th>
                      <th className="">
                        <div className="flex justify-center text-sm">
                          <div className=""> قیمت</div>
                        </div>
                      </th>
                      <th className="">
                        <div className="flex justify-center text-sm">
                          <div className=""> عملیات</div>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="px-5 rounded-3xl">
                    {data["reservations"] &&
                      [...data["reservations"]]
                        .filter((item) =>
                          (item?.orderNuumber)
                            .toString()
                            .includes(search.toString())
                        )
                        .sort((date1, date2) =>
                          !sort[1]
                            ? new Date(date1.submitDate.split("T")[0]) -
                              new Date(date2.submitDate.split("T")[0])
                            : new Date(date2.submitDate.split("T")[0]) -
                              new Date(date1.submitDate.split("T")[0])
                        )
                        .map((user) => (
                          <TraconeshItem user={user} key={user.mobile} />
                        ))}
                  </tbody>
                </table>
                {!data && <LoadingAdminListItem />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
