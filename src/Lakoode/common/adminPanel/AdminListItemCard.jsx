import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { RxTrash } from "react-icons/rx";

const AdminListItemCard = ({ item, td }) => {
  let lastTdIndex = td.length - 1;
  return (
    <tr className=" py-10 rounded-xl  hover:text-screenLight dark:text-[#d1d1d3] group border-b dark:border-0  ">
      {td.map((td, index) => (
        <td key={index}>
          <div
            className={`${
              td === "id"
                ? "text-sm text-btn font-semibold"
                : td === "name" ||
                  td === "title" ||
                  td === "birthDate" ||
                  td === "createdDate" ||
                  td === "releasedDate"
                ? "min-w-[169px]"
                : ""
            } ${index === 0 && "group-hover:rounded-l-xl"} 
            ${
              index === lastTdIndex && "group-hover:rounded-r-xl"
            }  flex group-hover:text-screenLight flex-col justify-center px-2  group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077]  duration-300 h-[64px] my-1  `}
          >
            <div className="self-center  text-center">
              {td === "image" ? (
                <img
                  src={"https://api.lakoode.ir/images/" + item[td]}
                  alt={item[td]}
                  className="w-[40px] h-[40px] self-center rounded-[28%] "
                />
              ) : td === "birthDate" ||
                td === "createdDate" ||
                td === "releasedDate" ? (
                item[td].split(" ")[0]
              ) : td === "action" ? (
                <div className="flex justify-center gap-3 text-[19px] py-[2px]">
                  <span className="cursor-pointer">
                    <AiOutlineEdit />
                  </span>
                  <span className="text-red-500 group-hover:text-red-300 text-[20px] cursor-pointer">
                    <RxTrash />
                  </span>
                </div>
              ) : (
                item[td]
              )}
            </div>
          </div>
        </td>
      ))}
      {/* <td>
            <div className="flex flex-col justify-center px-2 text-sm  group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077]  duration-300 h-[64px] my-1 group-hover:rounded-l-xl ">
              <span className="self-center font-semibold text-btn text-center">
                {item.id}
              </span>
            </div>
          </td>
          <td>
            <div className="flex justify-center px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] my-1 ">
              <img
                src={"https://api.lakoode.ir/images/" + item.image}
                alt={item.image}
                className="w-[40px] h-[40px] self-center rounded-[28%] "
              />
            </div>
          </td>
          <td>
            <div className="flex px-2 group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 self-center h-[64px] flex-col justify-center text-center my-1">
              {item.name}{" "}
            </div>
          </td>
          <td>
            <div className="flex px-2 text-sm group-hover:rounded-r-xl group-hover:dark:bg-[#24272e] group-hover:bg-[#6d7077] duration-300 h-[64px] flex-col justify-center text-center my-1 ">
              {item.birthDate.split(" ")[0]}
            </div>
          </td> */}
    </tr>
  );
};

export default AdminListItemCard;
