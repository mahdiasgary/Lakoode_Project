import axios from "axios";
import React, { useEffect, useState } from "react";
import TraconeshItem from "../users/TraconeshItem";
import { BsArrowDown } from "react-icons/bs";
import Ritem from "./Ritem";
import LoadingAdminListItem from "../../../common/LoadingAdminListItem";

const Dashboard = () => {
  const [dashData, setDash] = useState([]);
  const [data, setData] = useState();
  const [sort, setsort] = useState(["createdDate", true, true]);
  const [search, setSearch] = useState(["", "", ""]);
  useEffect(() => {
    axios
      .get(`https://localhost:7103/api/Reservation/GetAllReservedDays`, {
        withCredentials: true,
      })
      .then((r) => setData(r.data.data));
  }, []);
  useEffect(() => {
    axios
      .get("https://localhost:7103/api/Home", { withCredentials: true })
      .then((r) => {
        if (r.data.isSuccessFull) {
          setDash(r.data.data);
        }
      });
  }, []);
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
        (item?.orderNuumber).toString().includes(search[2]?.toString())
    );

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
        </div>
      </div>
      <div className="mt-16 lg:mt-20">
        <div>
          <div className="flex justify-center  mb-2">
            <div className=" min-w-[85vw] flex flex-col lg:flex-row lg:justify-between max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]">
              <div className="text-[17px] my-2 lg:self-center font-bold ">
                لیست رزرو ها
              </div>
              <div className="flex">
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
              </div>
              <div>
                <input
                  // value={search}
                  onChange={(e) =>
                    setSearch([search[0], search[1], e.target.value])
                  }
                  type="text"
                  placeholder="جستجوی کد رهگیری..."
                  className="h-[45px] w-[220px] rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
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
                        <div className=""> عملیات</div>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="px-5 rounded-3xl ">
                  {ww?.map((user) => (
                    <Ritem user={user} key={user.mobile} />
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
