import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

const MultipleSelect = ({ options, handleChange, lable }) => {
  options = options?.map((item) => {
  
      return {
        label: item.title,
        value: item.title,
        id: item.id,
      };
  });
  const colorStyles = {
    control: (styles, { isSelected }) => ({
      ...styles,
      backgroundColor: "zink",
      border: "none",
      outlineWidth: "0px",

    }),
    option: (
      styles,
      { data, isDisabled, isFocused, isSelected, isHovered }
    ) => {
      return {
        ...styles,
        color: data.color,
        backgroundColor: "#1c1d21",
        "&:hover": {
          ...styles,
          backgroundColor: "blue",
        },
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        color: "zink",
        // backgroundOpacity: "10%",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };
  return (
    <fieldset
      className={`border border-[#787f98] my-1 px-3 rounded-lg w-full   max-h-[280px] min-h-[69px] `}
    >
      <legend className="px-1 text-sm y9:text-[16px] text-btn text-[17px]">
        {lable}
      </legend>
<div>

      <CreatableSelect
        options={options}
        onChange={handleChange}
        isMulti
        className=" text-white"
        styles={colorStyles}
        isValidNewOption={() => false}
      />
</div>
    </fieldset>
  );
};

export default MultipleSelect;
