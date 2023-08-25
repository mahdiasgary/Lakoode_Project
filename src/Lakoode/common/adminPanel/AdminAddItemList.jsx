import React from "react";
import FormItem from "../FormItem";
import MultipleSelect from "../MultipleSelect";

const AdminAddItemList = ({ itemList, Formik, dataQuery, selectHandler }) => {
  // console.log(selectHandler["languageHandleChange"]);

  return (
    <div>
      {itemList.map((items, index) => (
        <div
          key={index}
          className="flex  flex-col sm:flex-row justify-center  sm:gap-6 "
        >
          {items.map((item, index) =>
            item === "Language" ||
            item === "Artist" ||
            item === "Genre" ||
            item === "Country" ||
            item === "Career" ? (
              <MultipleSelect
                key={index}
                options={dataQuery[item.toLowerCase() + "Query"].data}
                handleChange={
                  selectHandler[item.toLowerCase() + "HandleChange"]
                }
                lable={item}
              />
            ) : item === "Summary" ? (
              <div className="max-w-[900px] w-full ">
                <fieldset className="border border-[#787f98] my-1 px-3 rounded-lg w-full">
                  <legend className="px-1 text-btn text-[17px]">Summary</legend>
                  <textarea
                    type="text"
                    className="fa rounded-sm h-12 outline-none bg-transparent w-full text-lg"
                    name="text"
                    {...Formik.getFieldProps("summary")}
                  />
                </fieldset>
                {Formik.errors.summary && Formik.touched.summary && (
                  <div className="text-red-600 text-sm ">
                    {Formik.errors.summary}
                  </div>
                )}
              </div>
            ) : (
              <FormItem
                key={index}
                type={
                  item === "Released Date" ||
                  item === "Created Date" ||
                  item === "DateBirth"
                    ? "date"
                    : "text"
                }
                Formik={Formik}
                title={item}
                error={
                  Formik.errors[
                    item === "Created Date" || item === "Released Date"
                      ? item.replace(/\s/g, "")
                      : item.toLowerCase()
                  ]
                }
                touched={
                  Formik.touched[
                    [
                      item === "Created Date" || item === "Released Date"
                        ? item.replace(/\s/g, "")
                        : item.toLowerCase(),
                    ]
                  ]
                }
                styles={
                  item === "Imdb" || item === "Time"
                    ? "min-w-[100px]"
                    : "w-full"
                }
              />
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminAddItemList;
