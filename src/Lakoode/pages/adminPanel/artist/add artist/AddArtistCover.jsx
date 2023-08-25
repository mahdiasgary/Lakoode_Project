import React, { useState } from "react";
import DragDropImage from "../../../../common/DragDropImage";
import { RxTrash } from "react-icons/rx";
import AdminFormCoverIcon from "../../../../common/AdminFormCoverIcon";

const AddArtistCover = ({ artistImage, setArtistImage }) => {
  return (
    <li className=" ml-6 flex flex-col">
      <div className="flex">
        <AdminFormCoverIcon image={artistImage} />
        <h3 className="font-medium leading-tight self-center mt-2  px-1">
          Add Artist Image
        </h3>
      </div>
      <div className="mt-10">
        <div className="flex flex-col  md:flex-row justify-center gap-8 ">
          {artistImage ? (
            <div className="w-[190px]  h-[270px] flex flex-col ">
              <img
                alt="not found"
                src={URL.createObjectURL(artistImage)}
                className="max-w-[190px] max-h-[270px] rounded-xl "
              />
              <button
                onClick={() => setArtistImage(null)}
                className=" mt-2 bg- text-red-500 py-1 rounded-xl border hover:bg-border duration-200 border-border text-center  "
              >
                <RxTrash className="self-center inline" /> Remove
              </button>
            </div>
          ) : (
            <div className="text-center overflow-hidden">
              <DragDropImage setImage={setArtistImage} content={"cover"} />
              <p className="text-btn mt-3 font-semibold">Upload Artist Cover</p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AddArtistCover;
