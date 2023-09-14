import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import AdminListItemCard from "./AdminListItemCard";
import LoadingAdminListItem from "../LoadingAdminListItem";

const AdminListItems = ({ dataQuery, thAndTdAdminList, search }) => {
  const { data, isFetching, isLoading, error } = dataQuery;

  const [sort, setsort] = useState(["ID", false, false]);
  const sortBy = (key) => {
    if (key[0] === "NAME" || key[0] === "TITLE")
      return function sort(a, b) {
        let title1 = a[key[0].toLowerCase()].toLowerCase();
        let title2 = b[key[0].toLowerCase()].toLowerCase();
        if (key[2] ? title2 < title1 : title2 > title1) {
          return -1;
        }
      };

    else
    return function sort(a, b) {
      let value1 = a[key[0].toLowerCase()];
      let value2 = b[key[0].toLowerCase()];
      if (key[1]) return value2 - value1;
      else return value1 - value2;
    };
  };

  return (
    <div>
    <table className="rounded-xl   table-auto w-full border dark:border-0 ">
      <thead>
        <tr className="bg-[#1c1d21] h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
          {thAndTdAdminList[0].map((th, index) => (
            <th
              key={index}
              className={`px-3 py-2 ${
                th === "ID"
                  ? "w-[5%]"
                  : th === "NAME" ||
                    th === "BIRTH DATE" ||
                    th === " CREATED DATE" ||
                    th === "RELEASED DATE"
                  ? "w-[20%]  "
                  : "w-[10%}"
              }  cursor-pointer dark:text-[#6d7077] text-gray-300 `}
            >
              <div
                onClick={() =>
                  (th === "ID" || th === "NAME" || th === "TITLE" ||th === "TIME" || th==='BIRTHDATE') &&
                  setsort([
                    th,
                   ( th === "ID" || th === "TIME" || th==='BIRTHDATE' )? !sort[1] : false,
                    th === "NAME" || th === "TITLE" ? !sort[2] : false,
                    // th === "TIME" ? !sort[3] : false,
                    // th==='BIRTHDATE' ? !sort[4] : false
                  ])
                }
                className="flex justify-center"
              >
                <div className="ml-1">{th}</div>
                {(th === "ID" || th === "NAME" || th === "TITLE" || th === "TIME" || th==='BIRTHDATE') && (
                  <div
                    className={`self-center  cursor-pointer ${
                      sort[0] === th ? "text-white" : "text-[#6d7077]"
                    } ${ th === "ID" || th === "TIME" || th==='BIRTHDATE'  && sort[1] && "rotate-180"} ${
                      th === "NAME" && sort[2] && "rotate-180"
                    }
                      ${th === "TITLE" && sort[2] && "rotate-180"}
                      duration-200 `}
                  >
                    <BsArrowDown />
                  </div>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="px-5 rounded-3xl">
        {data &&
          [...data]
            .filter((item) =>
              item[
                thAndTdAdminList[0][2] === "NAME" ? "name" : "title"
              ]?.includes(search)
            )
            .sort(sortBy(sort))
            .map((tdItem,index) => (
              <AdminListItemCard
                item={tdItem}
                key={index}
                td={thAndTdAdminList[1]}
              />
            ))}
      </tbody>
    </table>
      {(isFetching || isLoading || error) && <LoadingAdminListItem />}
    </div>
  );
};

export default AdminListItems;
