import React from "react";

const FormItem = ({ Formik, title, error, touched, styles, type }) => {
  return (
    <div className={` ${styles}`}>
      <fieldset
        className={`${
          title === "Imdb" ? "text-yellow-400" : " text-btn"
        } border border-[#787f98]  my-1 px-3 rounded-lg  h-[69px] `}
      >
        <legend className={`px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}>
          {title}
        </legend>
        <input
          type={type}
          className="fa rounded-sm h-10 outline-none w-full  bg-transparent  text-lg px-2 "
          name="text"
          {...Formik.getFieldProps(
            title === "Created Date" || title === "Released Date"
              ? title.replace(/\s/g, "")
              : title.toLowerCase()
          )}
        ></input>
      </fieldset>
      {error && touched && <div className="text-red-600 text-sm ">{error}</div>}
    </div>
  );
};

export default FormItem;
