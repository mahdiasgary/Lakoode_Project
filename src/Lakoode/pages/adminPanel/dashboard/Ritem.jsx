import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import { useRemoveUserMutation } from "../../../redux/services/movieDatabase";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify";
const Ritem = ({ user, setState }) => {
  const [removeUser] = useRemoveUserMutation();
  const [isActive, setIsActive] = useState(false);

  const removeHandler = () => {
    Swal.fire({
      title: "مطمئن هستید؟",
      text: `لغو رزرو برای ${user.user.name + " " + user.user.lastName}`,
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
        }).then(function (response) {
          window.location.reload();
          setState(Math.random());
          toast.success("رزرو لغو شد", {
            autoClose: 1100,
            position: "top-left",
          });
        });
      }
    });
  };

  const approHand = () => {
    const formData = new FormData();
    formData.append("reservationId", user.id);
    Swal.fire({
      title: "مطمئن هستید؟",
      text: `تایید رزرو برای ${user.user.name + " " + user.user.lastName}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: " بله",
      cancelButtonText: "لغو",
    }).then((r) => {
      if (r.isConfirmed) {
        axios({
          method: "post",
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
          url: `https://localhost:7103/api/Admin/Reservation/ApproveReservation`,
          data: formData,
        })
          .then(function (response) {
            if (response.data.isSuccessFull) {
              setState(Math.random());
              toast.success(`تایید شد `, {
                autoClose: 1100,
                position: "top-left",
              });
            }
            if (!response.data.isSuccessFull) {
              setState(Math.random());
              toast.error("خطایی رخ داد ", {
                autoClose: 1100,
                position: "top-left",
              });
            }
          })
          .catch(function (response) {
            toast.error("خطایی رخ داد ", {
              autoClose: 1100,
              position: "top-left",
            });
          });
      }
    });
  };
  return (
    <tr className=" py-10 rounded-xl  hover:text-screenLight dark:text-[#d1d1d3] group border-b dark:border-0  ">
      <td>
        <div className="flex px-2 rounded-r-xl group-hover:dark:bg-[#24272e] group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.orderNuumber}
        </div>
      </td>
      <td>
        <div className="flex px-2 text-sm group-hover:dark:bg-[#24272e] group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.user.name + " " + user.user.lastName}
        </div>
      </td>
      <td>
        <div className="flex px-2 text-btn group-hover:dark:bg-[#24272e] group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.user.nationalCode}
        </div>
      </td>

      <td>
        <a href={`tel:${user.user.mobile}`}>
          <div className="flex px-2  group-hover:dark:bg-[#24272e] group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
            {user.user.mobile}
          </div>
        </a>
      </td>
      <td>
        <div className="flex px-2  group-hover:dark:bg-[#24272e] group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.villa.name}
        </div>
      </td>
      <td>
        <div className="flex px-2  group-hover:dark:bg-[#24272e] group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.villa.id}
        </div>
      </td>
      <td>
        <div className="flex px-2  group-hover:dark:bg-[#24272e] text-sm  group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {new Date(user.submitDate).toLocaleDateString("fa")}
        </div>
      </td>
      <td>
        <div className="flex px-2  group-hover:dark:bg-[#24272e] text-sm  group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {new Date(user.startDate).toLocaleDateString("fa")}
        </div>
      </td>
      <td>
        <div className="flex px-2  group-hover:dark:bg-[#24272e] text-sm  group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {new Date(user.endDate).toLocaleDateString("fa")}
        </div>
      </td>

      <td>
        <div className="flex px-2 text-sm group-hover:dark:bg-[#24272e] group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.price.toLocaleString()} تومان
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-gray-500 duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.isApproved ? (
            <div className="text-[12px] py-2 text-center w-[72px] text-green-600 px-2 group-hover:text-white bg-green-500 bg-opacity-30 font-bold rounded-lg ">
              تایید شده
            </div>
          ) : (
            <div
              onClick={approHand}
              className="text-[12px] px-6 py-2 lg:py-3 group-hover:text-white text-white bg-btn hover:bg-blue-800 cursor-pointer font-bold rounded-lg "
            >
              تایید{" "}
            </div>
          )}
        </div>
      </td>
      <td>
        <div className="flex justify-center px-2 group-hover:dark:bg-[#24272e] rounded-l-xl group-hover:bg-gray-500 duration-300 self-center h-[64px] f text-center my-1">
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

export default withRouter(Ritem);
