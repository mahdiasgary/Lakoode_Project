import React, { useState } from "react";
import { withRouter } from "react-router-dom";
const UserItemIndex = ({ user }) => {
  return (
    <tr className=" py-10 rounded-xl  hover:text-screenLight dark:text-[#d1d1d3] group border-b dark:border-0  ">
      <td>
        <div className="flex px-2 rounded-r-xl group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.orderNuumber}
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.villaName}
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.villaId}
        </div>
      </td>

      <td>
        <div className="flex px-2 text-sm group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {new Date(user.submitDate).toLocaleDateString("fa")}
        </div>
      </td>

      <td>
        <div className="flex px-2  group-hover:dark:bg-[#24272e] text-sm group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {new Date(user.startDate).toLocaleDateString("fa")}
        </div>
      </td>
      <td>
        <div className="flex px-2  group-hover:dark:bg-[#24272e] text-sm group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {new Date(user.endDate).toLocaleDateString("fa")}
        </div>
      </td>
      <td>
        <div className="flex px-2 text-sm group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.price.toLocaleString()} تومان
        </div>
      </td>
      <td>
        <div className="flex px-2 rounded-l-xl group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.isApproved ? (
            <div className="text-[12px] py-2 text-green-500 group-hover:text-white bg-green-500 bg-opacity-40 font-bold rounded-lg ">
              تایید شده
            </div>
          ) : (
            <div className="text-[12px] w-[126px] text-center py-2 lg:py-3 group-hover:text-white text-btn bg-btn bg-opacity-20  font-bold rounded-lg ">
              در انتظار تایید{" "}
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default withRouter(UserItemIndex);
