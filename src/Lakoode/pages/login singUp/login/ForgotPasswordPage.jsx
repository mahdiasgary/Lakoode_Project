import React, { useState } from "react";
import a from "./Screenshot (168).png";
import b from "./Most-Expensive-Movies-Ever-Made.png";
import ForgetPasswordForm from "../../../components/singup login/login/ForgetPasswordForm";
import VerifyEmail from "../../../components/singup login/verify email/VerifyEmail";
import { useFormik } from "formik";
import CreatePasswordFrom from "../../../components/singup login/login/CreatePasswordFrom";
import {
  useSendEmailForForgotPasswordMutation,
  useSubmitOtpForForgotPasswordMutation,
} from "../../../redux/services/movieDatabase";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Navbar from "../../../components/navbar/Navbar";

const ForgotPasswordPage = ({ history, openMenu, setOpenMenu }) => {
  const initialValues = {
    mobile: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  };
  const validationSchema = Yup.object({
    mobile: Yup.string()
      .required("لطفا این فیلد را پر کنید")
      .min(8, "رمز عبور کوتاه است . باید حداقل 8 کارکتر باشد"),
    newPassword: Yup.string()
      .required("لطفا این فیلد را پر کنید")
      .min(8, "رمز عبور کوتاه است . باید حداقل 8 کارکتر باشد"),
    confirmPassword: Yup.string()
      .required("لطفا این فیلد را پر کنید")
      .oneOf([Yup.ref("password")], "با رمز عبور تطابق ندارد."),
  });

  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  const [loadingButton, setloadingButton] = useState(false);

  const [ForForgotPassword] = useSendEmailForForgotPasswordMutation();
  const sendEmailForForgotPasswordHandler = () => {
    ForForgotPassword({
      mobile: Formik.values.mobile,
    })
      .unwrap()
      .then((res) => {
        setloadingButton(false);
        if (res.isSuccessFull && res.status === "EmailSend") {
          setSwichBetweenFormAndVerify(true);
          toast.info(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
        }
        if (!res.isSuccessFull && res.status === "UserNotfound") {
          toast.error(res.message, {
            autoClose: 2100,
            position: "top-right",
          });
        }
      });
  };

  const [swichBetweenFormAndVerify, setSwichBetweenFormAndVerify] =
    useState(true);
  const [swichBetweenCreateAndVerify, setSwichBetweenCreateAndVerify] =
    useState(false);
  return (
    <div className="w-full h-screen bg-[#f9f9f9] dark:bg-[#282a37] text-white">
      <Navbar from={"login"} openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className=" z-[5] absolute py-20 xl:px-32 flex xl:justify-start justify-center w-full text-textLight dark:text-white">
        {swichBetweenFormAndVerify ? (
          swichBetweenCreateAndVerify ? (
            <CreatePasswordFrom Formik={Formik} email={Formik.values.mobile} />
          ) : (
            <VerifyEmail
              userEmail={Formik.values.mobile}
              setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
              setSwichBetweenCreateAndVerify={setSwichBetweenCreateAndVerify}
              from={"forgotPasswordForm"}
              action={sendEmailForForgotPasswordHandler}
            />
          )
        ) : (
          <ForgetPasswordForm
            setloadingButton={setloadingButton}
            loadingButton={loadingButton}
            Formik={Formik}
            setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
            sendEmailForForgotPasswordHandler={
              sendEmailForForgotPasswordHandler
            }
          />
        )}

        {/* log in image background */}
        {localStorage.getItem("DarkMode") === "dark" ? (
          <img
            className="opacity-60  h-screen  hidden  md:flex fixed right-0 top-0 z-[0] "
            src={a}
            alt=""
          />
        ) : (
          <img
            className="opacity-60  h-screen dark:hidden hidden  md:flex fixed right-0 top-0 z-[0] "
            src={b}
            alt="q"
          />
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
