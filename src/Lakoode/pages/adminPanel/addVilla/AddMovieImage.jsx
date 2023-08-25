import React, { useState } from "react";
import { BsImageFill } from "react-icons/bs";
import { RxTrash } from "react-icons/rx";
import DragDropImage from "../../../../common/DragDropImage";
import AdminFormCoverIcon from "../../../../common/AdminFormCoverIcon";
const AddMoveImage = ({
  movieCover,
  setMovieCover,
  movieBackground,
  setMovieBackground,
}) => {
  return (
    <li className="mb-16 ml-6 flex flex-col">
      <div className="flex">
      <AdminFormCoverIcon image={movieCover} secondeImage={movieBackground} />
        <h3 className="font-medium leading-tight self-center mt-2  px-1">
          Add Movie Image
        </h3>
      </div>
      <div className="mt-10">
        <div className="flex flex-col  md:flex-row justify-center gap-8 ">
          {movieCover ? (
            <div className="w-[190px]  h-[270px] flex flex-col ">
              <img
                alt="not found"
                src={URL.createObjectURL(movieCover)}
                className="max-w-[190px] max-h-[270px] rounded-xl "
              />
              <button
                onClick={() => setMovieCover(null)}
                className=" mt-2 bg- text-red-500 py-1 rounded-xl border hover:bg-border duration-200 border-border text-center  "
              >
                <RxTrash className="self-center inline" /> Remove
              </button>
            </div>
          ) : (
            <div className="text-center overflow-hidden">
              <DragDropImage
                setImage={setMovieCover}
                content={"cover"}
              />
              <p className="text-btn mt-3 font-semibold">Upload Movies Cover</p>
            </div>
          )}

          {movieBackground ? (
            <div className="w-[190px] mt-10 md:mt-0 h-[270px] flex flex-col ">
              <img
                alt="not found"
                src={URL.createObjectURL(movieBackground)}
                className="max-w-[190px] max-h-[270px] rounded-xl "
              />
              <button
                onClick={() => setMovieBackground(null)}
                className=" mt-2 bg- text-red-500 py-1 rounded-xl border hover:bg-border duration-200 border-border text-center  "
              >
                <RxTrash className="self-center inline" /> Remove
              </button>
            </div>
          ) : (
            <div className=" text-center  overflow-hidden ">
              <DragDropImage
                setImage={setMovieBackground}
                content={"background"}
              />
              <p className="text-btn mt-3 font-semibold">
                Upload Movies Background
              </p>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default AddMoveImage;
