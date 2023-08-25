import React, { useState } from "react";
import { RxTrash } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";
import { useRemoveUserMutation } from "../../../redux/services/movieDatabase";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
const UsersItem = ({ user, removeUserHandler, history }) => {
  const [removeUser] = useRemoveUserMutation();
  const [isActive, setIsActive] = useState(false);

  const removeHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete ${user.username} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(() => {
      // removeUserHandler(user)
      removeUser({ id: user.id })
        .unwrap()
        .then((r) => {
          history.push("/admin/users");
          // Swal.fire({
          //   title: "Deleted!",
          //   text: `${user.username} has been deleted.`,
          //   icone: "success",
          //   confirmButtonColor: "#3085d6",
          // });
        })
        .then((error) => {
          // console.log(error);
        });
    });
    // removeUser({ id: user.id })
    // .unwrap()
    // .then((r) => {
    // })
    // .then((error) => {
    // });
  };
  return (
    <tr className=" py-10 rounded-xl cursor-pointer hover:text-screenLight dark:text-[#d1d1d3] group border-b dark:border-0  ">
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] rounded-r-xl group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          <span className="self-center font-semibold text-btn group-hover:text-white text-sm ">
            {/* {user.id} */}1
          </span>
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          <img
            src={"https://localhost:7175/images/" + user.profileImage}
            alt="ff"
            className="w-[40px] h-[40px] self-center rounded-[50%] "
          />
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {/* {user.username} */}
          علی عباسی
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {/* {user.email} */}
          005796088
        </div>
      </td>

      <td>
        {user.isAdmin ? (
          <div className="flex text-btn text-sm font-semibold px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
            ادمین
          </div>
        ) : (
          <div className="flex px-2 text-sm font-semibold group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
            کاربر
          </div>
        )}
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {/* {user.isActive ? (
            <div className="bg-[#213242] px-2 text-sm text-btn rounded-md py-[2px]">
              Active
            </div>
          ) : (
            <div className="bg-[#2d2f3b] px-2 text-sm text-[#5e626e] rounded-md py-[2px]">
              Inactive
            </div>
          )} */}
          8
        </div>
      </td>
      <td>
        <div className="flex px-2 min-w-[200px] group-hover:dark:bg-[#24272e] text-sm group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {/* {user.createdDate.split("+")[0]} */}09201413045
        </div>
      </td>
      <td>
        <div className="flex px-2 min-w-[200px] group-hover:dark:bg-[#24272e] text-sm group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          {/* {user.createdDate.split("+")[0]} */}1402/3/7
        </div>
      </td>
      <td>
        <div className="flex px-2 group-hover:dark:bg-[#24272e] rounded-l-xl group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
          <div className="flex gap-2 text-[19px] py-[2px]">
            {/* <span className="cursor-pointer text-sm bg-btn self-center py-2 px-3 rounded-xl hover:bg-blue-800 text-white">
              تخفیف{" "}
            </span> */}
            <div className="cursor-pointer flex text-sm border border-btn self-center py-2 px-3 rounded-xl  text-white">
              <input dir="ltr" type="text" className="rounded-r-xl dark:bg-transparent px-5" />
              <div className="px-3 bg-btn py-2 mx-1 hover:bg-blue-800 rounded-l-xl">
                send
              </div>
            </div>
            <span className="cursor-pointer">
              <AiOutlineEdit />
            </span>
            <Link to={"/admin/users"}>
              <button
                onClick={removeHandler}
                className="text-red-500 text-[20px] cursor-pointer"
              >
                <RxTrash />
                <p onClick={isActive && setIsActive(false)}></p>
              </button>
            </Link>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(UsersItem);
