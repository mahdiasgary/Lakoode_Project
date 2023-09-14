import React, { useEffect, useState } from "react";
import Foter from "../../Foter";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../../../components/navbar/Navbar";
import Swal from "sweetalert2";
import UserItemIndex from "../UserItemIndex";
const UserProfile = ({ history }) => {
  let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [userInfo, setUserInf] = useState();
  useEffect(() => {
    axios
      .get("https://localhost:7103/api/Account/Login", {
        withCredentials: true,
      })
      .then((r) => {
        if (r.data.isSuccessFull) {
          setUserInf(r.data.data);
        }
        if (!r.data.isSuccessFull) {
          history.push("/login");
        }
      });
  }, []);
  const logout = () => {
    Swal.fire({
      title: "مطمئن هستید؟",
      text: "مایل به خروج از حساب کاربری خود هستید",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: " بله",
      cancelButtonText: "لغو",
    }).then((r) => {
      if (r.isConfirmed) {
        axios({
          withCredentials: true,
          method: "post",
          url: `https://localhost:7103/api/Account/SignOut`,
        })
          .then((r) => window.location.reload())
          .catch((r) => console.log(r));
      }
      // console.log(r)
    });
  };
  return (
    <div>
      <Navbar from={"login"} />

      <div className="flex flex-col w-full mb-20  ">
        <div className="mt-4 flex justify-between md:self-center w-full px-5 y7:px-10 xl:px-16 ">
          <div className="flex">
            <h1 className="text-2xl self-center font-bold mx-5 mt-8 mb-8">
              کاربر
            </h1>
            <div className="self-cneter flex flex-col justify-center">
              {userInfo?.isDisabled && (
                <p className="text-red-500 rounded-xl bg-red-500 bg-opacity-20 px-5 py-2 mx-2 ">
                  غیر فعال
                </p>
              )}
              {userInfo?.isAdmin && (
                <p className="text-blue-500 rounded-xl bg-blue-500 bg-opacity-20 px-5 py-2 mx-2 ">
                  ادمین{" "}
                </p>
              )}
            </div>
          </div>
          <div>
            <button
              onClick={logout}
              className="text-red-500 text-sm hover:text-white hover:bg-opacity-100 duration-200 self-center mt-8 rounded-xl bg-red-500 bg-opacity-20 px-5 py-2 mx-2 "
            >
              خروج از حساب کاربری
            </button>
          </div>
        </div>

        <div className="md:flex w-full px-5 y7:px-10 xl:px-16">
          <div className="flex flex-wrap gap-3">
            <fieldset
              className={`flex border-[#787f98] border-opacity-40 flex-col justify-center border-b dark:rounded-none rounded-xl duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
            >
              <legend
                className={`border-[#787f98] border-opacity-40 px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
              >
                نام{" "}
              </legend>
              <div className="flex justify-between mb-1 ">
                <p className="self-center pl-3">{userInfo?.name}</p>
              </div>
            </fieldset>{" "}
            <fieldset
              className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl border-[#787f98] border-opacity-40 duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
            >
              <legend
                className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
              >
                نام خانوادگی{" "}
              </legend>
              <div className="flex justify-between mb-1 ">
                <p className="self-center pl-3">{userInfo?.lastName}</p>
              </div>
            </fieldset>{" "}
            <fieldset
              className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl border-[#787f98] border-opacity-40 duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
            >
              <legend
                className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
              >
                موبایل{" "}
              </legend>
              <div className="flex justify-between mb-1 ">
                <p className="self-center pl-3">{userInfo?.mobile}</p>
              </div>
            </fieldset>
            <fieldset
              className={`flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
            >
              <legend
                className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
              >
                کد ملی{" "}
              </legend>
              <div className="flex justify-between mb-1 ">
                <p className="self-center pl-3">{userInfo?.nationalCode}</p>
              </div>
            </fieldset>
            <fieldset
              className={`${userInfo?.email ==='UserAddedByAdmin' && 'hidden'} flex flex-col justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
            >
              <legend
                className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
              >
                ایمیل{" "}
              </legend>
              <div className="flex justify-between mb-1 ">
                <p className="self-center pl-3">{userInfo?.email}</p>
              </div>
            </fieldset>
            <fieldset
              className={`flex flex-col  justify-center border-b dark:rounded-none rounded-xl
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[73px] w-[300px] `}
            >
              <legend
                className={` px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}
              >
                تاریخ ثبت نام{" "}
              </legend>
              <div className="flex justify-between mb-1 ">
                <p className="self-center pl-3">
                  {" "}
                  {new Date(userInfo?.createdDate).toLocaleDateString("fa")}
                </p>
              </div>
            </fieldset>{" "}
          </div>
        </div>
        <div className="mt-2 md:self-center w-full px-5 y7:px-10 xl:px-16 ">
          
            <Link to={"/forgotpassword"}>
              <div
                className={`flex flex-col cursor-pointer hover:bg-blue-800 text-center justify-center bg-btn text-white  rounded-[30px]
                    border-[#787f98] border-opacity-40 
                     duration-150 shadow-md  my-1 px-1  h-[65px] w-[300px] `}
              >
                تغییر رمز عبور
              </div>
            </Link>
        </div>

        <div className="mt-8 md:self-center w-full px-3 y7:px-5 xl:px-16 ">
          <div className="dark:bg-border bg-white dark:bg-opacity-40  rounded-3xl p-4  ">
            <div className="">
              <p className="text-[20px] font-semibold my-4 mx-3 ">رزرو ها </p>
              <div className="flex justify-center w-full">
             {
              userInfo?.reservations.length === 0 ? (
                <p className="text-center py-5 w-full ">
                  رزروی برای شما یافت نشد :(
                </p>
              ) : 
                <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[85vw] max-w-[85vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
                  <table className="rounded-xl   table-auto w-full border dark:border-0 ">
                    <thead>
                      <tr className="bg-[#1c1d21] h-[65px] dark:text-[#6d7077] text-gray-300 text-sm ">
                        <th className=" py-2  ">
                          <div className="flex justify-center cursor-pointer ">
                            <div className="">کد رهگیری</div>
                          </div>
                        </th>
                        <th className=" py-2  ">
                          <div className="flex justify-center cursor-pointer ">
                            <div className="">ویلا </div>
                          </div>
                        </th>
                        <th className="">آیدی ویلا</th>
                        <th className="w-[20%]">
                          <div className="flex justify-center  text-sm">
                            <div className="">تاریخ سفارش</div>
                          </div>
                        </th>
                        <th className="">
                          <div className="flex justify-center  text-sm">
                            <div className="">تاریخ ورود</div>
                          </div>
                        </th>
                        <th className="">
                          <div className="flex justify-center text-sm">
                            <div className="">تاریخ خروج</div>
                          </div>
                        </th>
                        <th className="">
                          <div className="flex justify-center text-sm">
                            <div className=""> قیمت</div>
                          </div>
                        </th>
                        <th className="w-[10%]">
                          <div className="flex justify-center text-sm">
                            <div className=""> وضعیت</div>
                          </div>
                        </th>{" "}
                      </tr>
                    </thead>

                    <tbody className="px-5 rounded-3xl">
                      {(
                        userInfo?.reservations?.map((user) => (
                          <UserItemIndex user={user} key={user.mobile} />
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

             }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
};

export default withRouter(UserProfile);
