import React, { useState } from "react";
import a from "../../../assets/88.png";
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
import axios from "axios";
import Vw from "./Vw";
import { useStateContext } from "../../../contextProvider/ContextProvider";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const ForgotPasswordPage = ({ history, openMenu, setOpenMenu, login }) => {
  // const { loginStatus } = useStateContext();
  // if (loginStatus[0]) history.push("/user");
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
      .oneOf([Yup.ref("newPassword")], "با رمز عبور تطابق ندارد."),
  });

  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  const [loadingButton, setloadingButton] = useState(false);

  const [ForForgotPassword] = useSendEmailForForgotPasswordMutation();

  const sendEmailForForgotPasswordHandler = () => {
    axios
      .get("https://localhost:7103/api/Account/SendSmsForgotPassword", {
        params: { mobile: Formik.values.mobile },
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        setloadingButton(false);
        if (res.data.isSuccessFull) {
          setSwichBetweenFormAndVerify(true);
          toast.success(res.data.message, {
            autoClose: 2100,
            position: "top-left",
          });
        }
        if (!res.data.isSuccessFull && res.data.status === "UserNotfound") {
          setloadingButton(false);

          toast.error(res.data.message, {
            autoClose: 2100,
            position: "top-left",
          });
        }
      })
      .catch((res) => {
        toast.error("خطا مجددا امتحان کنید  ", {
          autoClose: 2100,
          position: "top-left",
        });
        setloadingButton(false);
      });
  };

  const [swichBetweenFormAndVerify, setSwichBetweenFormAndVerify] =
    useState(false);
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
            <Vw
              userEmail={Formik.values.mobile}
              setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
              setSwichBetweenCreateAndVerify={setSwichBetweenCreateAndVerify}
              from={"forgotPasswordForm"}
              action={sendEmailForForgotPasswordHandler}
            />
          )
        ) : (
          <ForgetPasswordForm
            login={login}
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
            className="opacity-70 transform -scale-x-100  h-screen hidden  md:flex   fixed left-0 top-0 z-[0] "
            src={a}
            alt=""
          />
        ) : (
          <img
            className="opacity- h-screen dark:hidden hidden  md:flex fixed left-0 top-0 z-[0] "
            src={b}
            alt="q"
          />
        )}
      </div>
    </div>
  );
};

export default withRouter(ForgotPasswordPage);
