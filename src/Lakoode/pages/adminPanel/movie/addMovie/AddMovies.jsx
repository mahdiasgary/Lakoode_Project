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
import {
  useGetCountryListInAdminPanelQuery,
  useGetLanguageListInAdminPanelQuery,
  useGetArtisitListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import AdminFromBodyInfo from "../../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../../common/AdminFormDoneIcon";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import AdminAddItemList from "../../../../common/adminPanel/AdminAddItemList";
import { adminAddMovieListItems } from "../../../../constans";
import axios from "axios";
const AddMovies = ({ history, from, user }) => {
  const [movieCover, setMovieCover] = useState(null);
  const [movieBackground, setMovieBackground] = useState(null);
  const [state, setState] = useState(false);
  // console.log(movieCover)
  let artistQuery = [{}];
  const initialValues = {
    title: "rr",
    imdb: "",
    year: "",
    time: "",
    ReleasedDate: "",
    CreatedDate: "",

    name: "ggfب",
    metraj: "20",
    valency: "",
    bathroom: "",
    iraniantoilet: "",
    tiolet: "",
    room: "",
    onebed: "",
    twobed: "",
    summary: "",
  };
  const [addvilla] = useAddvillaMutation();
  const [selectedrefaKH, setrfaKH] = useState([]);
  const [selectedrfaEM, setefaEM] = useState([]);
  const [selectedbath, setbarh] = useState([]);
  const [selectedkech, setkech] = useState([]);
  const [selectedsarma, setsarma] = useState([]);
  const [selectedsecurity, setscurity] = useState([]);
  const [selectedtaf, settaf] = useState([]);

  const [loadingButton, setLoadingButton] = useState(false);
  const [imgs, setImgs] = useState([]);
  console.log(selectedkech);
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

    formData.append("Name", "h");
    formData.append("Size", "20");
    formData.append("Description", "tt");
    formData.append("RoomCount", [{ room: 5 }, 8]);
    formData.append("VillaFacilities", selectedkech);
    // formData.append("Images", imgs);
    for (let i = 0; i < imgs.length; i++) {
      formData.append("Images", imgs[i]);
    }
    // for (let i = 0; i < selectedkech.length; i++) {
    //   formData.append("VillaFacilities", selectedkech[i]);
    // }
    axios({
      method: "post",
      url: "https://localhost:7103/api/Villa/Create",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

    // for (let i = 0; i < selectedbath.length; i++) {
    //   formData.append("SelectedCountryIds", selectedbath[i]);
    // }
    // for (let i = 0; i < selectedGenres.length; i++) {
    //   formData.append("SelectedGenreIds", selectedGenres[i]);
    // }
    // for (let i = 0; i < selectedLanguages.length; i++) {
    //   formData.append("SelectedLanguagesIds", selectedLanguages[i]);
    // }

    //   addvilla({
    //     Name: "fff",
    //     Description: "u",
    //     Size: 20,
    //     RoomCount: 2,
    //     VillaFacilities: ['rrrr' , 'rrrr' ],
    //     Images: "d",
    //   })
    //     .unwrap()
    //     .then((r) => {
    //       console.log(res);
    //       toast.success(`${Formik.values.name} add to Movies `, {
    //         autoClose: 1100,
    //         position: "top-right",
    //       });
    //       // setTimeout(() => history.push("movieslist"), 800);
    //     })
    //     .then((error) => console.log(error));
  };
  const kechQU = [
    { title: "آشپزخانه", id: 1 },
    { title: "لوازم سرو غذا", id: 2 },
    { title: "ماشین لباسشویی", id: 3 },
    { title: "یخچال", id: 4 },
  ];

  const refaEM = [
    { title: "منظره به حیاط", id: 5 },
    { title: "میز ناهارخوری", id: 6 },
    { title: "تلویزیون", id: 7 },
    { title: "منظره به دریا", id: 8 },
    { title: "گاز", id: 9 },
    { title: "برق", id: 10 },
    { title: "آب", id: 11 },
    { title: "مبلمان", id: 12 },
    { title: "جاروبرقی", id: 13 },
    { title: "کمد/دراور", id: 14 },
  ];
  const sarmaGarma = [
    { title: "کولر گازی", id: 15 },
    { title: "رادیاتور", id: 16 },
    { title: "پنکه سقفی", id: 17 },
    { title: "بخاری", id: 18 },
  ];
  const refaKH = [
    { title: "پارکینگ", id: 19 },
    { title: "سم پاشی دوره ای", id: 20 },
    { title: "wifi", id: 23 },
  ];
  const scuriti = [
    { title: "دوربین مدار بسته", id: 21 },
    { title: "نگهبان", id: 22 },
  ];

  const tafREf = [
    { title: "بیلیارد", id: 24 },
    { title: "استخر", id: 25 },
    { title: "شاه نشین", id: 26 },
  ];
  const bath = [
    { title: "حمام", id: 1 },
    { title: "سرویس ایرانی", id: 27 },
    { title: "سرویس فرنگی", id: 28 },
  ];
  // const servic =[
  //   {title:'حمام' , id:29},
  //   {title:'سرویس ایرانی' , id:27},
  //   {title:'سرویس فرنگی' , id:28},

  // ]

  return (
    <div className=" my-10  mx-6 sm:mx-10 md:mx-28">
      <button onClick={SubmiHandler}>55555</button>
      {/* <AddMoveImage
                movieBackground={movieBackground}
                setMovieBackground={setMovieBackground}
                movieCover={movieCover}
                setMovieCover={setMovieCover}
              /> */}
      <div className="text-[23px] font-bold mt-10 mb-6 ">{from ? "ویرایش ویلا" : 'افزودن ویلا جدید'}</div>
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

              <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
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
              ثبت{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(AddMovies);
