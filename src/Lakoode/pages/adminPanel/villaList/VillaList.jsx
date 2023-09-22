import React, { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import UsersItem from "./UsersItem";

import { withRouter } from "react-router-dom";
import axios from "axios";
import LoadingAdminListItem from "../../../common/LoadingAdminListItem";

const VillaList = ({ history }) => {
  const [sort, setsort] = useState(["id", false, false]);

  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://api.lakoode.ir/api/Admin/Villa/GetAll", {
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      })
      .then((r) => {
        setData(r.data);
      });
  }, []);
  return (
    <div className="pb-20 w-full">
      <div className="flex justify-center mt-20 mb-2">
        <div className="flex justify-between  min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div className="text-[23px] font-bold ">لیست ویلا ها</div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
          <table className="rounded-xl   table-auto w-full border dark:border-0 ">
            <thead>
              <tr className="bg-[#1c1d21] h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
                <th className="px-3 py-2  w-[5%] cursor-pointer dark:text-[#6d7077] text-gray-300 ">
                  <div
                    onClick={() => setsort(["id", !sort[1], false])}
                    className="flex justify-center"
                  >
                    <div className="ml-1">آیدی</div>
                  </div>
                </th>
                <th className="w-[20%]">تصویر</th>

                <th className=" py-2 w-[20%] ">
                  <div
                    onClick={() => {
                      setsort(["username", false, !sort[2]]);
                    }}
                    className="flex justify-center cursor-pointer "
                  >
                    <div className="">نام</div>
                  </div>
                </th>
                {/* <th className="w-[20%]">تقویم</th> */}

                <th className="w-[20%]">
                  <div className="flex  justify-center">
                    <div className="">عملیات</div>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="px-5 rounded-3xl">
              {data?.data?.map((user) => (
                <UsersItem user={user} key={user.id} />
              ))}
            </tbody>
          </table>
          {!data && <LoadingAdminListItem />}
        </div>
      </div>
    </div>
  );
};

export default withRouter(VillaList);
