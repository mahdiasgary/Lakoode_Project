import React, { useState } from "react";
import AddFileItem from "./AddFileItem";
const UplaodBox = ({imgs,setImgs}) => {
  const [qualities, set] = useState([
    "تصویر اصلی",
    "تصویر فرعی",
    "تصویر فرعی",
    "تصویر فرعی",
    "تصویر فرعی",
  ]);
  const qa = () => {
    set([...qualities, "تصویر فرعی"]);
  };
  return (
    <div
      className={`w-full max-w-[850px] rounded-lg cursor-pointer border-2 border-[#787f98] border-dashed text-center m-2   flex flex-col`}
    >
      <p className="pt-3">آپلود تصاویر</p>
      <div className="my-3">
        {qualities.map((quality, index) => (
          <AddFileItem key={index} quality={quality} setImgs={setImgs}  imgs={imgs} />
        ))}
      </div>
      <div>
        <div className=" flex justify-center">
          <div
            onClick={qa}
            className="py-2 w-36 px-5 text-sm  mb-3 border rounded-2xl"
          >
            افزودن جعبه آپلود
          </div>
        </div>
      </div>
    </div>
  );
};

export default UplaodBox;
