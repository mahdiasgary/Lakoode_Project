import axios from "axios";
import React, { useEffect, useState } from "react";
import TraconeshItem from "../users/TraconeshItem";
import { BsArrowDown } from "react-icons/bs";
import Ritem from "./Ritem";
import LoadingAdminListItem from "../../../common/LoadingAdminListItem";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [dashData, setDash] = useState([]);
  const [data, setData] = useState();

  const [IsActive, setIsActive] = useState(true);
  const [sort, setsort] = useState(["createdDate", true, true]);
  const [search, setSearch] = useState(["", "", ""]);
  const [state, setState] = useState("");
  const [villas, setvillas] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.lakoode.ir/api/Admin/Reservation/GetAllReservedDays`, {
        withCredentials: true,credentials: 'include', 
        headers: { "Content-Type": "application/json" }
      })
      .then((r) => setData(r.data.data));

    axios
      .get(`https://api.lakoode.ir/api/Admin/Villa/GetAll`, {
        withCredentials: true, 
        headers: { "Content-Type": "application/json" }
      })
      .then((r) => {
        setIsActive(r.data.data[0].ipG_IsActive);
        setvillas(r.data.data);
      });

    axios
      .get("https://api.lakoode.ir/api/Admin/Home/AdminIndex", {
        withCredentials: true, 
        headers: { "Content-Type": "application/json" }
      })
      .then((r) => {
        if (r.data.isSuccessFull) {
          setDash(r.data.data);
        }
      });
  }, [state]);

  let ww =
    data &&
    data.filter(
      (item) =>
        new Date(item.startDate.split("T")[0])
          .toLocaleDateString("fa-IR-u-nu-latn")
          .split("/")[1]
          .includes(search[0]?.toString()) &&
        new Date(item.startDate.split("T")[0])
          .toLocaleDateString("fa-IR-u-nu-latn")
          .split("/")[0]
          .toString()
          .includes(search[1]?.toString()) &&
        (item?.orderNuumber).toString().includes(search[2]?.toString()) &&
        item.isApproved
    );
  let www = data && data.filter((item) => !item.isApproved);
  const mounth = [
    [1, "فروردین"],
    [2, "اردیبهشت"],
    [3, "خرداد"],
    [4, "تیر"],
    [5, "مرداد"],
    [6, "شهریور"],
    [7, "مهر"],
    [8, "آبان"],
    [9, "آذر"],
    [10, "دی"],
    [11, "بهمن"],
    [12, "اسفند"],
  ];
  let yyy = [1402, 1403, 1404, 1405, 1406];
  const activeHand = (arg) => {
    const formData = new FormData();
    formData.append("IsActive", arg);
    axios({
      method: "post",
      withCredentials: true, 

      headers: { "Content-Type": "multipart/form-data" },
      url: "https://api.lakoode.ir/api/Admin/Villa/SetIPG",
      data: formData,
    })
      .then(function (response) {
        setState(Math.random());
        toast.success(
          ` ${arg ? "درگاه بانکی فعال شد" : "درگاه بانکی غیر فعال شد"}`,
          {
            autoClose: 1100,
            position: "top-left",
          }
        );
      })
      .catch(function (response) {
        toast.error(` ${"خطایی رخ داد.مجددا تلاش نمایید"}`, {
          autoClose: 1100,
          position: "top-left",
        });
      });
  };
  const option = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    <div className="min-h-screen">
      <div className="text-[20px] mt-8 px-6 lg:px-16 self-center font-bold ">
        داشبورد
      </div>
      <div>
        <div className="flex px-8 lg:px-20 mt-10 flex-wrap gap-5">
          <div className="flex">
            <p className="self-center font-semibold">تعداد کاربران</p>
            <div className="dark:bg-border rounded-2xl mx-2 bg-white  dark:bg-opacity-40 px-6 py-3 ">
              {dashData.userCount}
            </div>
          </div>
          <div className="flex">
            <p className="self-center font-semibold">تعداد ویلا ها</p>
            <div className="dark:bg-border rounded-2xl mx-2 bg-white  dark:bg-opacity-40 px-6 py-3 ">
              {dashData.villaCount}
            </div>
          </div>
          <div className="flex">
            <p className="self-center font-semibold">تعداد رزرو ها</p>
            <div className="dark:bg-border rounded-2xl mx-2 bg-white  dark:bg-opacity-40 px-6 py-3 ">
              {dashData.reservationCount}
            </div>
          </div>
          <div className="flex">
            <span className="self-center font-semibold px-2">درگاه بانکی</span>
            <div className="self-center mt-2">
              <label className="relative  self-center inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  onChange={(e) => activeHand(e.target.checked)}
                  value={IsActive}
                  checked={IsActive}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
              </label>
            </div>
          </div>
        </div>
        <div className="px-8 lg:px-20 mt-10">
          <div className="md:text-[17px] flex flex-col lg:flex-row my-2 lg:self-center font-bold ">
            وضعیت رزرواسیون ویلا ها ( امروز )
            <div className="mx-4 text-sm lg:self-center opacity-90">
              {new Date().toLocaleDateString("fa-IR-u-nu-latn", option)}
            </div>
          </div>
          <div>
            <div className="flex  flex-wrap gap-4 dark:bg-opacity-40 dark:bg-border bg-white p-5 rounded-3xl ">
              {villas.map(
                (villa, index) =>
                  !villa?.isDisabled && (
                    <div
                      key={index}
                      className="flex   rounded-3xl dark:bg-opacity- "
                    >
                      <div className="py-2 rounded-r-3xl  dark:bg-border bg-screenLight px-3">
                        {villa?.name}{" "}
                      </div>
                      <div
                        className={`px-4  text-white py-[10px] rounded-l-3xl text-sm self-center ${
                          villa?.isDisabled && "hidden"
                        } ${villa?.isReserved ? "bg-btn" : "bg-gray-500"}`}
                      >
                        {villa?.isReserved ? "رزرو" : "خالی"}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 lg:mt-20">
        <div>
          <div className="flex justify-center  mb-2">
            <div className=" min-w-[85vw] flex flex-col lg:flex-row lg:justify-between max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]">
              <div className="text-[17px] my-2 lg:self-center font-bold ">
                رزرو های در انتظار تایید{" "}
              </div>
              {/* <div className="flex">
                <p className="self-center">رزرو های ثبت شده در ماه</p>
                <select
                  onChange={(e) =>
                    setSearch([e.target.value, search[1], search[2]])
                  }
                  name=""
                  id=""
                  className="dark:bg-border text-center rounded-2xl mx-2 w-20 py-1 bg-white  dark:bg-opacity-40"
                >
                  <option value="">---</option>
                  {mounth.map((m) => (
                    <option key={m[0]} value={m[0]}>
                      {m[1]}
                    </option>
                  ))}
                </select>
                <p className="self-center">سال</p>
                <select
                  name=""
                  id=""
                  onChange={(e) =>
                    setSearch([search[0], e.target.value, search[2]])
                  }
                  className="dark:bg-border text-center rounded-2xl mx-2 w-20 py-1 bg-white  dark:bg-opacity-40"
                >
                  <option value="">---</option>
                  {yyy.map((m) => (
                    <option key={m[0]} value={m[0]}>
                      {m}
                    </option>
                  ))}
                </select>
              </div> */}
              {/* <div>
                <input
                  // value={search}
                  onChange={(e) =>
                    setSearch([search[0], search[1], e.target.value])
                  }
                  type="text"
                  placeholder="جستجوی کد رهگیری..."
                  className="h-[45px] w-[220px] rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
                />
              </div> */}
            </div>
          </div>

          <div className=" flex justify-center w-full">
            <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[95vw] max-w-[95vw] md:min-w-[75vw] md:max-w-[75vw] rounded-2xl">
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
                        <div className="">مسافر </div>
                      </div>
                    </th>
                    <th className=" py-2  ">
                      <div className="flex justify-center cursor-pointer ">
                        <div className="">کد ملی</div>
                      </div>
                    </th>
                    <th className=" py-2  ">
                      <div className="flex justify-center cursor-pointer ">
                        <div className="">موبایل </div>
                      </div>
                    </th>
                    <th className=" py-2  ">
                      <div className="flex justify-center cursor-pointer ">
                        <div className="">ویلا </div>
                      </div>
                    </th>
                    <th className="">آیدی ویلا</th>
                    <th className="">
                      <div className="flex justify-center  text-sm">
                        <div className="">تاریخ سفارش</div>
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
                    <th className="w-[10%]">
                      <div className="flex justify-center text-sm">
                        <div className=""> وضعیت</div>
                      </div>
                    </th>
                    <th className="">
                      <div className="flex justify-center text-sm">
                        <div className=""> عملیات</div>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="px-5 rounded-3xl ">
                  {www?.map((user, index) => (
                    <Ritem setState={setState} user={user} key={index} />
                  ))}
                </tbody>
              </table>
              {www?.length === 0 && (
                <p className="text-center py-5 ">موردی یافت نشد :(</p>
              )}
              {!ww && <LoadingAdminListItem />}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 mb-32 lg:mt-20">
        <div>
          <div className="flex justify-center  mb-2">
            <div className=" min-w-[85vw] flex flex-col lg:flex-row lg:justify-between max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]">
              <div className="text-[17px] my-2 lg:self-center font-bold ">
                لیست رزرو های تایید شده
              </div>
              <div className="flex flex-col lg:flex-row">
                <p className="lg:self-center">رزرو های ثبت شده</p>
                <div className="flex mx-2">
                  <p className="self-center ">در ماه</p>
                  <select
                    onChange={(e) =>
                      setSearch([e.target.value, search[1], search[2]])
                    }
                    name=""
                    id=""
                    className="dark:bg-border text-center rounded-2xl mx-2 w-20 py-1 bg-white  dark:bg-opacity-40"
                  >
                    <option value="">---</option>
                    {mounth.map((m, index) => (
                      <option key={index} value={m[0]}>
                        {m[1]}
                      </option>
                    ))}
                  </select>
                  <p className="self-center">سال</p>
                  <select
                    name=""
                    id=""
                    onChange={(e) =>
                      setSearch([search[0], e.target.value, search[2]])
                    }
                    className="dark:bg-border text-center rounded-2xl mx-2 w-20 py-1 bg-white  dark:bg-opacity-40"
                  >
                    <option value="">---</option>
                    {yyy.map((m, index) => (
                      <option key={index} value={m[0]}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <input
                  // value={search}
                  onChange={(e) =>
                    setSearch([search[0], search[1], e.target.value])
                  }
                  type="text"
                  placeholder="جستجوی کد رهگیری..."
                  className="h-[45px] placeholder:text-sm w-[220px] rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
                />
              </div>
            </div>
          </div>

          <div className=" flex justify-center w-full">
            <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[95vw] max-w-[95vw] md:min-w-[75vw] md:max-w-[75vw] rounded-2xl">
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
                        <div className="">مسافر </div>
                      </div>
                    </th>
                    <th className=" py-2  ">
                      <div className="flex justify-center cursor-pointer ">
                        <div className="">کد ملی</div>
                      </div>
                    </th>
                    <th className=" py-2  ">
                      <div className="flex justify-center cursor-pointer ">
                        <div className="">موبایل </div>
                      </div>
                    </th>
                    <th className=" py-2  ">
                      <div className="flex justify-center cursor-pointer ">
                        <div className="">ویلا </div>
                      </div>
                    </th>
                    <th className="">آیدی ویلا</th>
                    <th className="">
                      <div className="flex justify-center  text-sm">
                        <div className="">تاریخ سفارش</div>
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
                        <div className=""> وضعیت</div>
                      </div>
                    </th>
                    <th className="">
                      <div className="flex justify-center text-sm">
                        <div className=""> عملیات</div>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="px-5 rounded-3xl ">
                  {ww?.map((user, index) => (
                    <Ritem user={user} key={index} />
                  ))}
                </tbody>
              </table>
              {ww?.length === 0 && (
                <p className="text-center py-5 ">موردی یافت نشد :(</p>
              )}
              {!ww && <LoadingAdminListItem />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
