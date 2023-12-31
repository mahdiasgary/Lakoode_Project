import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";
const TraconechItem = ({ user }) => {
  const [isActive, setIsActive] = useState(false);

  const removeHandler = () => {
    Swal.fire({
      title: "مطمئن هستید؟",
      text: `رزرو در  تاریخ مورد نظر لغو خواهد شد`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: " بله",
      cancelButtonText: "لغو",
    }).then((r) => {
      if (r.isConfirmed) {
        const formData = new FormData();
        formData.append("reservationId", user.id);
        axios({
          withCredentials: true,
          method: "post",
          url: "https://localhost:7103/api/Admin/Reservation/DeleteResavationByAdmin",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
          Swal.fire({
            title: "موفق",
            text: ` رزرو تاریخ مورد نظر با موفقیت لغو شد`,
            icone: "success",
            confirmButtonColor: "#3085d6",
          });
          window.location.reload();
        });
      }
    });
  };

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
      {/* <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.isApproved ? (
            <div className="text-[12px] py-2 text-green-500 group-hover:text-white bg-green-500 bg-opacity-40 font-bold rounded-lg ">
              تایید شده
            </div>
          ) : (
            <div
              onClick={approHand}
              className="text-[12px] py-2 lg:py-3 group-hover:text-white text-white bg-btn hover:bg-blue-800 cursor-pointer font-bold rounded-lg "
            >
              تایید{" "}
            </div>
          )}
        </div>
      </td> */}
      <td>
        <div className="flex justify-center px-2 group-hover:dark:bg-[#24272e] rounded-l-xl group-hover:bg-[#6d7077] duration-300 self-center h-[64px] f text-center my-1">
          <button
            onClick={removeHandler}
            className="text-red-500 text-[20px] cursor-pointer"
          >
            <RxTrash />
            <p onClick={isActive && setIsActive(false)}></p>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(TraconechItem);
