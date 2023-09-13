import React, { useState } from "react";

const ForgetPasswordForm = ({
  Formik,
  login,
  setSwichBetweenFormAndVerify,
  sendEmailForForgotPasswordHandler,
  loadingButton,
  setloadingButton,
}) => {
  return (
    <div className="w-full z-[5] flex justify-center xl:justify-start  ">
      <div className="item-center self-center ">
        <h1 className="font-extrabold text-[25px] lg:text-[30px] y9:text-[39px] ">
          {login ? "تغییر رمز عبور" : "فراموشی رمز عبور"}
        </h1>
        <p className="text- opacity-70  mt-3">لطفا شماره موبایل خود را </p>
        <p className="text- opacity-70  ">برای دریافت کد تایید وارد کنید</p>

        {/* log in form */}
        <form>
          <div className="flex justify-center">
            <div>
              <input
                {...Formik.getFieldProps("mobile")}
                type="text"
                disabled={loadingButton && true}
                placeholder="شماره موبایل خود را وارد کنید"
                className={` ${
                  loadingButton && "cursor-not-allowed"
                } flex  px-5 flex-col outline-none focus:ring-2 duration-150 focus:ring-btn justify-center text-textLight dark:text-textDark bg-white dark:bg-[#323645] shadow-md  my-1 rounded-2xl mt-8  h-[58px]  w-[90vw] md:w-[440px]  `}
              />
              {Formik.errors.mobile && Formik.touched.mobile && (
                <div className="text-red-600 text-sm font-bold mx-4 ">
                  {Formik.errors.email}
                </div>
              )}
            </div>
          </div>
          {/* send code button */}
          <div className="text-center flex ">
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
              <input
                onClick={() => {
                  sendEmailForForgotPasswordHandler(), setloadingButton(true);
                }}
                disabled={Formik.errors.email ? true : false}
                className={`${
                  Formik.errors.email
                    ? "bg-gray-500 cursor-not-allowed opacity-80 "
                    : "hover:bg-blue-800 bg-btn cursor-pointer"
                }  outline-none text-white px-5  duration-300 justify-center  font-bold text-lg shadow-md  my-1 rounded-2xl mt-5  h-[50px] w-[90vw] md:w-[440px] `}
                type="submit"
                value={"ارسال کد تایید"}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
