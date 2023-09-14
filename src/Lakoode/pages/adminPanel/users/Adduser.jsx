import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";

const Adduser = ({ history }) => {
  //   const { loginStatus } = useStateContext();
  //   if (loginStatus) history.push("/user");

  const [loadingButton, setLoadingButton] = useState(false);
  // const [userEmail, setUserEmail] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    nationalCode: "",
  };
  const validationSchema = Yup.object({
    mobile: Yup.string()
      .required("لطفا این فیلد را پر کنید ")
      .min(11, "شماره موبایل باید 11رقمی باشد"),
    nationalCode: Yup.string()
      .required("لطفا این فیلد را پر کنید ")
      .min(10, "کد ملی باید 10رقمی باشد"),
    firstName: Yup.string().required("لطفا این فیلد را پر کنید"),
    lastName: Yup.string().required("لطفا این فیلد را پر کنید"),
  });
  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  const userRegister = () => {
    axios({
      withCredentials:true,
      method: "post",
      url: "https://localhost:7103/api/Admin/User/CreateUser",
      data: {
        name: Formik.values.firstName,
        lastName: Formik.values.lastName,
        nationalCode: Formik.values.nationalCode,
        mobile: Formik.values.mobile,
      },
    })
      .then(({ data }) => {
        setLoadingButton(false);
        toast.success(`${Formik.values.firstName} با موفقیت ثبت نام شد`, {
          autoClose: 2100,
          position: "top-left",
        });
        history.push("users");
      })
      .catch((res) => {
        setLoadingButton(false);
        toast.info("این شماره ثبت نام شده است", {
          autoClose: 2100,
          position: "top-left",
        });
      });
  };
  return (
    <div className="w-full min-h-screen lg:px-20 mt-8 flex justify-center xl:justify-start ">
      <div className="item-center  ">
        {/* sing up form */}

        <h1 className="font-extrabold text-[25px] mb-10 ">افزودن کاربر جدید</h1>

        <div className=" y9:mx-0 ">
          <div>
            <div className="flex flex-col  md:flex-row md:max-w-[450px] md:gap-2">
              <div>
                <input
                  {...Formik.getFieldProps("firstName")}
                  type="text"
                  disabled={loadingButton && true}
                  placeholder="نام کاربر را وارد کنید"
                  className={` ${
                    loadingButton && "cursor-not-allowed"
                  } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px] w-[90vw] md:w-[212px]  `}
                />
                {Formik.errors.firstName && Formik.touched.firstName && (
                  <div className="text-red-600 text-sm font-bold mx-4 ">
                    {Formik.errors.firstName}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...Formik.getFieldProps("lastName")}
                  type="text"
                  disabled={loadingButton && true}
                  placeholder="نام خانوادگی کاربر را وارد کنید"
                  className={` ${
                    loadingButton && "cursor-not-allowed"
                  } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px] w-[90vw] md:w-[220px]  `}
                />
                {Formik.errors.lastName && Formik.touched.lastName && (
                  <div className="text-red-600 text-sm font-bold mx-4 ">
                    {Formik.errors.lastName}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <div>
                <input
                  {...Formik.getFieldProps("nationalCode")}
                  type="nationalCode"
                  disabled={loadingButton && true}
                  placeholder="کد ملی کاربر را وارد کنید"
                  className={` ${
                    loadingButton && "cursor-not-allowed"
                  } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px]  w-[90vw] md:w-[440px]  `}
                />
                {Formik.errors.nationalCode && Formik.touched.nationalCode && (
                  <div className="text-red-600 text-sm font-bold mx-4 ">
                    {Formik.errors.nationalCode}
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <div>
                <input
                  {...Formik.getFieldProps("mobile")}
                  type="phone"
                  disabled={loadingButton && true}
                  placeholder="شماره موبایل کاربر را وارد کنید"
                  className={` ${
                    loadingButton && "cursor-not-allowed"
                  } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-5  h-[58px]  w-[90vw] md:w-[440px]  `}
                />
                {Formik.errors.mobile && Formik.touched.mobile && (
                  <div className="text-red-600 text-sm font-bold mx-4 ">
                    {Formik.errors.mobile}
                  </div>
                )}
              </div>
            </div>

            {/* sing up button */}
            <div className="text-center flex justify-center ">
              {loadingButton ? (
                <button
                  className={` outline-none w-[90vw] md:w-[440px] cursor-not-allowed text-white px-5  duration-300 justify-center bg-btn font-bold text-lg shadow-md  my-1 rounded-2xl mt-5  h-[50px] `}
                >
                  <div className="flex justify-center">
                    <div className="self-center">
                      <svg
                        class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </div>
                    <p>صبور باشید ...</p>
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => {
                    userRegister();
                    setLoadingButton(true);
                  }}
                  disabled={
                    Object.keys(Formik.errors).length !== 0 ? true : false
                  }
                  className={`${
                    Object.keys(Formik.errors).length !== 0
                      ? "bg-gray-500 cursor-not-allowed opacity-80 "
                      : "hover:bg-blue-800 bg-btn cursor-pointer"
                  }  outline-none text-white px-5  duration-300 justify-center  font-bold text-lg shadow-md  my-1 rounded-2xl mt-5  h-[50px] w-[90vw] md:w-[440px] `}
                >
                  افزودن{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Adduser);
