import React, { useRef, useState } from "react";
import a from "../login/Screenshot (168).png";
import b from "../login/Most-Expensive-Movies-Ever-Made.png";
import SingupForm from "../../../components/singup login/singup/SingupForm";
import VerifyEmail from "../../../components/singup login/verify email/VerifyEmail";
import { useFormik } from "formik";
import { useRegisterUserMutation } from "../../../redux/services/movieDatabase";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Navbar from "../../../components/navbar/Navbar";
import axios from "axios";
import { useStateContext } from "../../../contextProvider/ContextProvider";

const SingupPage = ({ setOpenMenu, from, openMenu }) => {
  const { loginStatus } = useStateContext();
  if (loginStatus) history.push("/user");
  const [useRegisterUser] = useRegisterUserMutation();
  const [swichBetweenFormAndVerify, setSwichBetweenFormAndVerify] =
    useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const initialValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    nationalCode: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("user@example.com"),
    password: Yup.string()
      .required("لطفا این فیلد را پر کنید")
      .min(8, "رمز عبور کوتاه است . باید حداقل 8 کارکتر باشد"),
    confirmPassword: Yup.string()
      .required("لطفا این فیلد را پر کنید")
      .oneOf([Yup.ref("password")], "با رمز عبور تطابق ندارد."),
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
    setLoadingButton(true);
    setUserEmail(Formik.values.mobile);
    useRegisterUser({
      name: Formik.values.firstName,
      lastName: Formik.values.lastName,
      email: Formik.values.email,
      mobile: Formik.values.mobile,
      nationalCode: Formik.values.nationalCode,
      password: Formik.values.password,
      confirmPassword: Formik.values.confirmPassword,
    })
      .unwrap()
      .then((res) => {
        setLoadingButton(false);
        
        if (res.isSuccessFull && res.status === "SuccessRegister") {
          axios
          .get("https://localhost:7103/api/Account/ActiveAccount", {
            params: { mobile: Formik.values.mobile },
          })
          .then((res) => {
              console.log(res);
              setSwichBetweenFormAndVerify(true);
              toast.info(res.message, {
                autoClose: 2100,
                position: "top-left",
              });
            });
        }
      })
      .catch(() => {
        setLoadingButton(false);

        toast.info("این شماره ثبت نام شده است", {
          autoClose: 2100,
          position: "top-left",
        });
      });
  };
  return (
    <div className="w-full h-[900px] bg-[#f9f9f9] dark:bg-[#282a37] text-white">
      <Navbar from={"login"} openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className=" z-[5] absolute py-20 xl:px-32 flex xl:justify-start justify-center w-full text-textLight dark:text-white">
        {swichBetweenFormAndVerify ? (
          <VerifyEmail
            from={"singUp"}
            userEmail={userEmail}
            setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
            action={userRegister}
          />
        ) : (
          <SingupForm
            Formik={Formik}
            loadingButton={loadingButton}
            setSwichBetweenFormAndVerify={setSwichBetweenFormAndVerify}
            userRegister={userRegister}
          />
        )}
      </div>
      {/* log in image background */}
      {localStorage.getItem("DarkMode") === "dark" ? (
        <img
          className="opacity-60 transform -scale-x-100  h-screen hidden  md:flex   fixed left-0 top-0 z-[0] "
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
  );
};

export default SingupPage;
