import React, { useState } from "react";
import { BsImageFill, BsJournalText } from "react-icons/bs";
import AddArtistCover from "./AddArtistCover";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormItem from "../../../../common/FormItem";
import { Link, withRouter } from "react-router-dom";
import MultipleSelect from "../../../../common/MultipleSelect";
import {
  useAddArtistInAdminPanelMutation,
  useGetCareerListInAdminPanelQuery,
} from "../../../../redux/services/movieDatabase";
import { toast } from "react-toastify";
import AdminFromBodyInfo from "../../../../common/AdminFromBodyInfo";
import AdminFormDoneIcon from "../../../../common/AdminFormDoneIcon";
import AdminAddItemList from "../../../../common/adminPanel/AdminAddItemList";
import { adminAddArtistListItems } from "../../../../constans";
const AddArtist = ({ history }) => {
  const careerQuery =
    useGetCareerListInAdminPanelQuery();
  const [addNewSeries] = useAddArtistInAdminPanelMutation();
  const [artistImage, setArtistImage] = useState(null);
  const initialValues = {
    name: "",
    datebirth: "",
    summary: "",
  };
  const [loadingButton, setLoadingButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);
  const validationSchema = Yup.object({
    // name: Yup.string().required("name and last name is requried"),
  });
  const careerHandleChange = (selectedOption,) => {
    selectedOption = selectedOption?.map((career) => {
      return career.id;
    });
    setSelectedOption(selectedOption);
  };

  const Formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
  });
  function tranformDate(strDate) {
    let result = "";
    if (strDate) {
      let parts = strDate.split("-");
      result = `${parts[1]}/${parts[2]}/${parts[0]}`;
    }
    return result;
  }
  const SubmitHandler = () => {
    setLoadingButton(true);
    const formData = new FormData();
    formData.append("name", Formik.values.name);
    formData.append("birthDate", tranformDate(Formik.values.datebirth));
    formData.append("bio", Formik.values.summary);
    formData.append("image", artistImage);
    for (let i = 0; i < selectedOption.length; i++) {
      formData.append("selectedCareerIds", selectedOption[i]);
    }
    console.log(formData)
    addNewSeries(formData)
      .unwrap()
      .then((r) => {
        toast.success(`${Formik.values.name} add to Artist `, {
          autoClose: 1100,
          position: "top-right",
        });
        setTimeout(() => history.push("artistslist"), 800);
      })
      .then((error) => {});
  };

  return (
    <div className=" my-10  mx-6 sm:mx-10 md:mx-28">
      <div className="text-[23px] font-bold mt-10 mb-6 ">Add New Artist </div>
      <section className=" dark:text-screenLight text-sideBarDark  self-center mt-2  ">
        <div className="">
          <form className="" onSubmit={SubmitHandler}>
            <ol className="relative flex flex-col text-gray-500 border-l border-gray-300 dark:border-gray-600 dark:text-gray-400">
              <AddArtistCover
                artistImage={artistImage}
                setArtistImage={setArtistImage}
              />

              <li className="mb-10 ml-2 sm:ml-6 flex flex-col w-full">
                <AdminFromBodyInfo preInfo={artistImage} />

                <h3 className="font-medium leading-tight pt-2 ml-3 px-1">
                  Artist Info
                </h3>
                <div className="">
                  <div className="min-w-[200px] mt-4 md:mt-8 mx-3 ">
                  <AdminAddItemList dataQuery={{careerQuery}} Formik={Formik} itemList={adminAddArtistListItems} selectHandler={[careerHandleChange]}/>

                  </div>
                </div>
              </li>

              <li className="ml-6 ">
                <AdminFormDoneIcon preDone={artistImage} />
              </li>
            </ol>
          </form>
          <div className="flex justify-center ">
            {loadingButton ? (
              <button
                type="button"
                class="inline-flex items-center px-10 py-3  font-semibold leading-6 text-white transition duration-150 ease-in-out  rounded-lg shadow cursor-wait bg-blue-800"
                disabled=""
              >
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
                Loading...
              </button>
            ) : (
              <button
                onClick={SubmitHandler}
                className={
                  Object.keys(Formik.errors).length > 0
                    ? "bg-[#787f98] text-gray-800 opacity-60 px-16  py-2 rounded-lg font-semibold"
                    : "bg-btn text-white px-16 py-3 rounded-xl hover:bg-blue-800 duration-300 font-semibold"
                }
                type="submit"
                disabled={Object.keys(Formik.errors).length > 0 ? true : false}
              >
                DONE !
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default withRouter(AddArtist);
