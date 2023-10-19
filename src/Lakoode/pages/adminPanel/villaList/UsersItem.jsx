import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import { useRemoveVillaMutation } from "../../../redux/services/movieDatabase";
import { Link, withRouter, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const UsersItem = ({ user, removeVillaHandler }) => {
  const [removeVilla] = useRemoveVillaMutation();
  const [isActive, setIsActive] = useState(false);

  const removeHandler = () => {
    Swal.fire({
      title: "مطمئن هستید؟",
      text: `ایا میخواهید ویلا ${user.name} حذف شود؟  `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله حذف شود",
      cancelButtonText: "لغو",
    }).then((r) => {
      if (r.isConfirmed) {
        axios
          .get("https://localhost:7103/api/Admin/Villa/Disable", {
            params: { id: user.id },
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            history.push("/admin/villaslist");
            Swal.fire({
              title: "موفق",
              text: ` ویلا ${user.name} حذف شد.`,
              icone: "success",
              confirmButtonColor: "#3085d6",
            });
          });
      }
    });
  };
  const history = useHistory();
  return (
    <tr
      className={`${
        user.isDisabled && "hidden"
      } py-10 rounded-xl  hover:text-screenLight dark:text-[#d1d1d3] group border-b dark:border-0  `}
    >
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] rounded-r-xl group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          <span className="self-center font-semibold text-btn group-hover:text-white text-sm ">
            {user.id}
          </span>
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          <img
            src={`https://localhost:7103/api/Home/GetImageInIndex?imageName=${user?.images[0].imageName}`}
            // src={`https://localhost:7103/Content/images/`}
            alt="ff"
            className="w-[40px] h-[40px] self-center rounded-[50%] "
          />
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {user.name}
        </div>
      </td>

      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] rounded-l-xl group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          <div className="flex justify-center gap-2 text-[19px] py-[2px]">
            <span
              onClick={() => history.push("/admin/editvilla", user)}
              className="cursor-pointer"
            >
              <AiOutlineEdit />
            </span>
            <button
              onClick={removeHandler}
              className="text-red-500 text-[20px] cursor-pointer"
            >
              <RxTrash />
              <p onClick={isActive && setIsActive(false)}></p>
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(UsersItem);
