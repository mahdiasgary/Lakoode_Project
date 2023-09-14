import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import { useRemoveUserMutation } from "../../../redux/services/movieDatabase";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { IoMdAdd } from "react-icons/io";
const UsersItem = ({ user, removeUserHandler, setmobile, history }) => {
  const [removeUser] = useRemoveUserMutation();
  const [isActive, setIsActive] = useState(false);

  const removeHandler = () => {
    Swal.fire({
      title: "مطمئن هستید؟",
      text: `ایا میخواهید کاربر ${user.name} حذف شود؟  `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله حذف شود",
      cancelButtonText: "لغو",
    }).then((r) => {
      if (r.isConfirmed) {
        axios
          .get(
            `https://localhost:7103/api/Admin/User/DisableUser?mobile=${user.mobile}`,{withCredentials:true}
          )
          .then((res) => {
            window.location.reload(); // history.push("/admin/villaslist");
            Swal.fire({
              title: "موفق",
              text: ` کاربر ${user.name} حذف شد.`,
              icone: "success",
              confirmButtonColor: "#3085d6",
            });
          });
      }
    });
  };
  const addHandler = () => {
    Swal.fire({
      title: "مطمئن هستید؟",
      text: `ایا میخواهید کاربر ${user.name} فعال شود؟  `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله فعال شود",
      cancelButtonText: "لغو",
    }).then((r) => {
      if (r.isConfirmed) {
        axios
          .get(
            `https://localhost:7103/api/Admin/User/EnableUser?mobile=${user.mobile}`,{withCredentials:true}
          )
          .then((res) => {
            window.location.reload();
            Swal.fire({
              title: "موفق",
              text: ` کاربر ${user.name} فعال شد.`,
              icone: "success",
              confirmButtonColor: "#3085d6",
            });
          });
      }
    });
  };
  return (
    <tr className=" py-10 rounded-xl  hover:text-screenLight dark:text-[#d1d1d3] group border-b dark:border-0  ">
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] rounded-r-xl group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.name}
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.lastName}
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.nationalCode}
        </div>
      </td>

      <td>
        <div
          onClick={() => {
            setmobile(user.mobile);
          }}
          className="flex cursor-pointer px-2  group-hover:dark:bg-[#24272e] text-sm group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1"
        >
          {/* {user.createdDate.split("+")[0]} */}
          {user.mobile}
        </div>
      </td>
      <td>
        <div className="flex px-2  group-hover:dark:bg-[#24272e] text-sm group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {/* {user.createdDate.split("+")[0]} */}
          {new Date(user.createdDate).toLocaleDateString("fa")}
        </div>
      </td>
      
      <td>
        <div className="flex justify-center px-2 group-hover:dark:bg-[#24272e] rounded-l-xl group-hover:bg-[#6d7077] duration-300 self-center h-[64px]  text-center my-1">
          <div className="flex gap-2 lg:gap-4 self-center text-[19px] py-[2px]">
            <Link to={`user?${user.mobile}`}>
              <div className="text-sm self-center font-semibold cursor-pointer group-hover:text-white text-btn">
                جزئیات
              </div>
            </Link>
            {user.isDisabled ? (
              <button
                onClick={addHandler}
                className="text-blue-500 bg-blue-500 bg-opacity-20  rounded-md    cursor-pointer"
              >
                <IoMdAdd />{" "}
              </button>
            ) : (
              <button
                onClick={removeHandler}
                className="text-red-500 text-[20px] cursor-pointer"
              >
                <RxTrash />
                <p onClick={isActive && setIsActive(false)}></p>
              </button>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(UsersItem);
