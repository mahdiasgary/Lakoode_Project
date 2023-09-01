import React from "react";

const FormItem = ({ Formik, title, error, touched, styles, type }) => {
  return (
    <div className={` ${styles}`}>
      <fieldset
        className={` border border-[#787f98]  my-1 px-3 rounded-lg  h-[69px] `}
      >
        <legend className={`px-1 text-sm y9:text-[16px] text-btn  text-[17px]`}>
          {title}
        </legend>
        <input
          type={type}
          // value={Formik.values.name}
          className="fa rounded-sm h-10 outline-none w-full  bg-transparent  text-lg px-2 "
          name="text"
          {...Formik.getFieldProps(
            title === "نام"
              ? "name"
              : title === "متراژ"
              ? "metraj"
              : title === "اتاق خواب"
              ? "room"
              : title === "ظرفیت"
              ? "valency"
              : title === "حمام"
              ? "bathroom"
              : title === "سرویس ایرانی"
              ? "iraniantoilet"
              : title === "سرویس فرنگی"
              ? "tiolet"
              : title === "تخت یک نفره"
              ? "onebed"
              : title === "تخت دو نفره"
              ? "twobed"
              : title === "توضیحات"
              ? "summary"
              : title === " "
          )}
        ></input>
      </fieldset>
      {error && touched && <div className="text-red-600 text-sm ">{error}</div>}
    </div>
  );
};

export default FormItem;
