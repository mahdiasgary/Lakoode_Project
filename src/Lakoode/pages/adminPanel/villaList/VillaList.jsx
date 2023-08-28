import React, { useCallback, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import UsersItem from "./UsersItem";
import { BsArrowDown } from "react-icons/bs";
import {
  useGetUsersListInAdminPanelQuery,
  useRemoveUserMutation,
} from "../../../redux/services/movieDatabase";
import { withRouter } from "react-router-dom";
import LoadingAdminListItem from "../../../common/LoadingAdminListItem";
// import ToolTip from "../../../common/ToolTip";
const VillaList = ({ history }) => {
  const [, updateState] = useState();
  const { data, isFetching, isLoading, error } =
    useGetUsersListInAdminPanelQuery({}, { refetchOnMountOrArgChange: true });
  const [removeUser] = useRemoveUserMutation();
  const [sort, setsort] = useState(["id", false, false]);
  const [search, setSearch] = useState("");
  const [searc, setSearc] = useState(false);

  const removeUserHandler = ({ id, username }) => {
    const forceUpdate = useCallback(() => updateState({}), []);

    removeUser({ id })
      .unwrap()
      .then((r) => {
        Swal.fire({
          title: "Deleted!",
          text: `${username} has been deleted.`,
          icone: "success",
          confirmButtonColor: "#3085d6",
        });
      })
      .then((error) => {
        console.log(error);
      });
    // forceUpdate()
    setSearc(!searc);
    // history.push("/admin/users");
  };

  // sort by value
  const sortBy = (key) => {
    console.log(key);
    if (key[0] === "username")
      return function sort(a, b) {
        let title1 = a[key[0]].toLowerCase();
        let title2 = b[key[0]].toLowerCase();
        if (key[2] ? title2 < title1 : title2 > title1) {
          return -1;
        }
      };
    else
      return function sort(a, b) {
        console.log(b[key[0]]);
        let value1 = a[key[0]];
        let value2 = b[key[0]];
        if (key[1]) return value2 - value1;
        else value1 - value2;
      };
  };

  let list = [{
    id: 1,
    name: 'لاکوده',
    clander:'',

  }];

  return (
    <div className=" w-full">
      <div className="flex justify-center mt-20 mb-2">
        <div className="flex justify-between  min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div className="text-[23px] font-bold ">لیست ویلا ها</div>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search here .."
              className="h-[45px] w-[220px] rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
            />
          </div>
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
                    <div
                      className={`self-center  cursor-pointer ${
                        sort[0] === "id" ? "text-white" : "text-[#6d7077]"
                      } ${sort[1] && "rotate-180"} duration-200 `}
                    >
                      <BsArrowDown />
                    </div>
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
                    <div
                      className={`self-center  cursor-pointer ${
                        sort[0] === "username" ? "text-white" : "text-[#6d7077]"
                      } ${sort[2] && "rotate-180"} duration-200 `}
                    >
                      <BsArrowDown />
                    </div>
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
              {list
                //   .filter((item) => item.name?.includes(search))
                //   .sort(sortBy(sort))
                  .map((user) => (
                    <UsersItem
                      user={user}
                      key={user.id}
                      removeUserHandler={removeUserHandler}
                      // forceUpdate={forceUpdate}
                    />
                  ))}
            </tbody>
          </table>
          {(isFetching || isLoading || error) && <LoadingAdminListItem />}
        </div>
      </div>
      <ReactTooltip
        anchorId="a"
        place="bottom"
        content="Hello world! I'm a Tooltip"
      />
    </div>
  );
};

export default withRouter(VillaList);