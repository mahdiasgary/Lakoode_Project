import React, { useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import AddMoveImage from "./AddMovieImage";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useAddvillaMutation,
  useGetGenreListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import UplaodBox from "./UplaodBox";

import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import AdminAddItemList from "../../../../common/adminPanel/AdminAddItemList";
import { adminAddMovieListItems } from "../../../../constans";
import axios from "axios";
const AddMovies = ({ history, from, user }) => {
  console.log(user)
  const [imgs, setImgs] = useState([]);
  const initialValues = {
    name: from && user ? user.name : "",
    metraj: from && user ? user.size : "",
    valency: from && user ? JSON.parse(user.roomCount)[5] : "",
    bathroom: from && user ? JSON.parse(user.roomCount)[2] : "",
    iraniantoilet: from && user ? JSON.parse(user.roomCount)[3] : "",
    tiolet: from && user ? JSON.parse(user.roomCount)[4] : "",
    room: from && user ? JSON.parse(user.roomCount)[0] : "",
    onebed: from && user ? JSON.parse(user.roomCount)[1] : "",
    twobed: from && user ? JSON.parse(user.roomCount)[6] : "",
    summary: from && user ? user.description : "",
  };

  const [addvilla] = useAddvillaMutation();
  const [selectedrefaKH, setrfaKH] = useState([2]);
  const [selectedrfaEM, setefaEM] = useState([]);
  const [selectedbath, setbarh] = useState([]);
  const [selectedkech, setkech] = useState([]);
  const [selectedsarma, setsarma] = useState([]);
  const [selectedsecurity, setscurity] = useState([]);
  const [selectedtaf, settaf] = useState([]);

  const [loadingButton, setLoadingButton] = useState(false);
  const validationSchema = Yup.object({
    title: Yup.string().required("title is requried"),
    imdb: Yup.string()
      .required("imdb is requried")
      .matches(/(?=.*[0-9])/, "imdb should be a number"),
    year: Yup.string()
      .required("Year is requried")
      .matches(/(?=.*[0-9])(?=.{4,})/, "Year should be a number be 4 digits"),
    time: Yup.string().required("Time is requried"),
    summary: Yup.string().required("Summary is requried"),
    ReleasedDate: Yup.string().required("ReleasedDate is requried"),
    CreatedDate: Yup.string().required("CreatedDate is requried"),
  });
  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });

  const kechQUHand = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setkech(selectedOption);
  };
  const refaKHHand = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setrfaKH(selectedOption);
  };
  const refaEMHand = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setefaEM(selectedOption);
  };
  const bathHand = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setbarh(selectedOption);
  };

  const tafREfHand = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    settaf(selectedOption);
  };
  const scurityHand = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setscurity(selectedOption);
  };
  const sarmaHand = (selectedOption) => {
    selectedOption = selectedOption?.map((item) => {
      return item.id;
    });
    setsarma(selectedOption);
  };

  function tranformDate(strDate) {
    let result = "";
    if (strDate) {
      let parts = strDate.split("-");
      result = `${parts[1]}/${parts[2]}/${parts[0]}`;
    }
    return result;
  }

  const SubmiHandler = () => {
    setLoadingButton(true);






    const formData = new FormData();
    formData.append("Name", Formik.values.name);
    formData.append("Size", Formik.values.metraj);
    formData.append("Description", Formik.values.summary);
    formData.append(
      "RoomCount",
      JSON.stringify([
        Formik.values.room,
        Formik.values.onebed,
        Formik.values.bathroom,
        Formik.values.iraniantoilet,
        Formik.values.tiolet,
        Formik.values.valency,
        Formik.values.twobed,
      ])
    );
    formData.append(
      "VillaFacilities",
      JSON.stringify(
        selectedkech
          .concat(selectedbath)
          .concat(selectedrefaKH)
          .concat(selectedtaf)
          .concat(selectedsecurity)
          .concat(selectedsarma)
          .concat(selectedrfaEM)
       ));
    for (let i = 0; i < imgs.length; i++) {
      formData.append("Images", imgs[i]);
    }

    if (user) {
      axios({
        method: "put",
        url: `https://localhost:7103/api/Villa/Edit/${user?.id}`,
        data: {
          name: Formik.values.name,
          description: Formik.values.summary,
          size: Formik.values.metraj,
          roomCount: JSON.stringify([
            Formik.values.room,
            Formik.values.onebed,
            Formik.values.bathroom,
            Formik.values.iraniantoilet,
            Formik.values.tiolet,
            Formik.values.valency,
            Formik.values.twobed,
          ]),
          villaFacilities: JSON.stringify(
            selectedkech
              .concat(selectedbath)
              .concat(selectedrefaKH)
              .concat(selectedtaf)
              .concat(selectedsecurity)
              .concat(selectedsarma)
              .concat(selectedrfaEM)
          ),
          isDisabled: false,
        },
      })
        .then(function (response) {
          toast.success(`${Formik.values.name} ویرایش شد! `, {
            autoClose: 1100,
            position: "top-left",
          });
          setTimeout(() => history.push("villaslist"), 800);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    } else {
      axios({
        method: "post",
        url: "https://localhost:7103/api/Villa/Create",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          toast.success(`${Formik.values.name} به ویلا ها اضافه شد. `, {
            autoClose: 1100,
            position: "top-left",
          });
          setTimeout(() => history.push("villaslist"), 800);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  };
  const kechQU = [
    { title: "آشپزخانه", id: 1 },
    { title: "لوازم سرو غذا", id: 2 },
    { title: "ماشین لباسشویی", id: 3 },
    { title: "یخچال", id: 4 },
    { title: "چایی ساز", id: 5 },
    { title: "مایکروویو", id: 6 },
  ];

  const refaEM = [
    { title: "منظره به حیاط", id: 10 },
    { title: "میز ناهارخوری", id: 11 },
    { title: "تلویزیون", id: 12 },
    { title: "منظره به دریا", id: 13 },
    { title: "گاز", id: 14 },
    { title: "برق", id: 15 },
    { title: "آب", id: 16 },
    { title: "مبلمان", id: 17 },
    { title: "جاروبرقی", id: 18 },
    { title: "کمد/دراور", id: 19 },
    
    { title: "رخت آویز", id: 20 },
    { title: "اتو", id: 21 },
    { title: "گیرنده دیجیتال", id: 22 },
    { title: "باربیکیو", id: 23 },
    { title: "شامپو", id: 24 },
    { title: "حوله", id: 25 },
    { title: "سشوار", id: 27 },
    { title: "آلاچیق", id: 28 },
 ];
  const sarmaGarma = [
    { title: "کولر گازی", id: 31 },
    { title: "رادیاتور", id: 32 },
    { title: "پنکه سقفی", id: 33 },
    { title: "بخاری", id: 34 },
  ];
  const refaKH = [
    { title: "پارکینگ", id: 36 },
    { title: "سم پاشی دوره ای", id: 37 },
    { title: "نظافت مستمر", id: 40 },
    { title: "شستشو ملافه ها", id: 41 },


  ];
  const scuriti = [
    { title: "دوربین مدار بسته", id: 61 },
    { title: "نگهبان", id: 62 },
  ];

  const tafREf = [
    { title: "بیلیارد", id: 46 },
    { title: "استخر", id: 47 },
    { title: "شاه نشین", id: 48 },
    { title: "کنسول بازی", id: 49 },
    { title: "wifi", id: 50 },
    { title: "فوتبال دستی", id: 51 },
    { title: "پینگ پنگ", id: 52 },
    { title: "ایر هاکی", id: 53 },




  ];
  const bath = [
    { title: "حمام", id: 56 },
    { title: "سرویس ایرانی", id: 57 },
    { title: "سرویس فرنگی", id: 58 },
  ];

  return (
    <div className=" my-10  mx-6 sm:mx-10 md:mx-28">
      {/* <button onClick={SubmiHandler}>55555</button> */}
      {/* <AddMoveImage
                movieBackground={movieBackground}
                setMovieBackground={setMovieBackground}
                movieCover={movieCover}
                setMovieCover={setMovieCover}
              /> */}
      <div className="text-[23px] font-bold mt-10 mb-6 ">
        {from ? "ویرایش ویلا" : "افزودن ویلا جدید"}
      </div>
      <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
        <div className="">
          <form className="">
            <ol className="relative flex flex-col text-gray-500  border-gray-300 dark:border-gray-600 dark:text-gray-400">
              <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                  درباره ویلا{" "}
                </h3>
                <div className="min-w-[200px] mt-4 md:mt-8 mx-3 ">
                  <AdminAddItemList
                    dataQuery={{
                      bath,
                      kechQU,
                      refaEM,
                      refaKH,
                      tafREf,
                      scuriti,
                      sarmaGarma,
                    }}
                    Formik={Formik}
                    itemList={adminAddMovieListItems}
                    selectHandler={{
                      refaEMHand,
                      refaKHHand,
                      bathHand,
                      kechQUHand,
                      tafREfHand,
                      sarmaHand,
                      scurityHand,
                    }}
                  />
                </div>
              </li>

              <li
                className={`${
                  user && "hidden"
                } mb-10 ml-2 sm:ml-6 flex flex-col w-full`}
              >
                <UplaodBox setImgs={setImgs} imgs={imgs} />
              </li>
            </ol>
          </form>
          <div className="flex justify-center ">
            <button
              onClick={SubmiHandler}
              className={
                //   Object.keys(Formik.errors).length > 0 ||
                //   movieCover === null ||
                //   movieBackground === null ||
                //   selectedkech.length === 0 ||
                //   selectedbath.length === 0 ||
                //   selectedGenres.length === 0 ||
                //   selectedLanguages.length === 0
                //     ? "bg-[#787f98] text-gray-800 opacity-60 px-16  py-2 rounded-lg font-semibold"
                //     :
                // }
                "bg-btn text-white px-16 py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold"
              }
              // type="submit"
              // disabled={
              //   (Object.keys(Formik.errors).length>0 ||movieCover===null ||movieBackground===null ||selectedOption.length===0)
              //     ? true
              //     : false
              // }
            >
              {user ? "ویرایش" : "ثبت"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(AddMovies);
