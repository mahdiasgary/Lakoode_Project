import Tiltt from "./Tilt";
import axios from "axios";
import { useEffect, useState } from "react";

const MainTilt = ({ selectetOpt, priceRoom, priceRange }) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("https://localhost:7103/api/Home/GetAll").then((r) => {
      setData(r.data);
    });
  }, []);
console.log(selectetOpt)
  let ww = data?.data?.filter(
    (q) =>
      !q.isDisabled &&
      q.villaFacilities?.includes(selectetOpt[0]) &&
      q.villaFacilities?.includes(selectetOpt[1]) &&
      q.villaFacilities?.includes(selectetOpt[2]) &&
      q.villaFacilities?.includes(selectetOpt[3]) &&
      q.villaFacilities?.includes(selectetOpt[4]) &&
      JSON.parse(q.roomCount)[0].toString().includes(priceRoom) &&
      q.pricedDays[0]?.price - q?.pricedDays[0]?.disscount <= priceRange[1] &&
      q.pricedDays[0]?.price - q?.pricedDays[0]?.disscount >= priceRange[0]
  );
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.01, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div className="dark:text-white mb-72 text-[16px] relative mt-36 -top-24  md:top-0 ">
      <div className="flex justify-center"></div>
      <div className="flex justify-center ">
        <div className="flex  bg-opacity-50 w-[100vw] md:w-[90vw] flex-col justify-between rounded-3xl">
          <div className="flex justify-center ">
            {ww?.length === 0 ? (
              <div className="text-center text-[18px] mb-20 ">
                ویلایی یافت نشد :(
              </div>
            ) : (
              <div>
                <p className="text-center pb-4">
                  ویلای مورد نظر را انتخاب کنید!
                </p>
                <div
                  id="skills"
                  className={`md:mx-16  duration-500  rounded-3xl z-[5] w-[80vw] lg:w-[80vw] max-w-[1040px]   grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center`}
                >
                  {ww?.map((villa, index) => (
                    <Tiltt
                      villa={villa}
                      key={index}
                      defaultOptions={defaultOptions}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {!ww && (
        <div className="flex justify-center">
          <div
            id="skills"
            className={`md:mx-16  duration-500  rounded-3xl z-[5] w-[80vw] lg:w-[80vw] max-w-[1040px]   grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center`}
          >
            {" "}
            <div>
              <div>
                <div className="border-2 my-7 dark:border-gray-600  my-2   w-[80vw] sm:w-[310px] sm:h-[400px] rounded-3xl  shadow-lg ">
                  <div className="animate-pulse flex space-x-20 ">
                    <div className="flex-1  py-1 self-center">
                      <div className="h-[220px] rounded-3xl m-4  bg-slate-300 dark:bg-opacity-40  dark:bg-gray-500  "></div>
                      <div className="h-[22px] my-2 mx-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                      <div className="h-[22px] w-[40%] my-2 mx-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                      <div className="flex">
                        <div className="h-[22px]  w-[40%] my-2 mx-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                        <div className="h-[22px]  w-[40%] my-2 ml-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="border-2 my-7 dark:border-gray-600  my-2   w-[80vw] sm:w-[310px] sm:h-[400px] rounded-3xl  shadow-lg ">
                  <div className="animate-pulse flex space-x-20 ">
                    <div className="flex-1  py-1 self-center">
                      <div className="h-[220px] rounded-3xl m-4  bg-slate-300 dark:bg-opacity-40  dark:bg-gray-500  "></div>
                      <div className="h-[22px] my-2 mx-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                      <div className="h-[22px] w-[40%] my-2 mx-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                      <div className="flex">
                        <div className="h-[22px]  w-[40%] my-2 mx-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                        <div className="h-[22px]  w-[40%] my-2 ml-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="border-2 my-7 dark:border-gray-600  my-2   w-[80vw] sm:w-[310px] sm:h-[400px] rounded-3xl  shadow-lg ">
                  <div className="animate-pulse flex space-x-20 ">
                    <div className="flex-1  py-1 self-center">
                      <div className="h-[220px] rounded-3xl m-4  bg-slate-300 dark:bg-opacity-40  dark:bg-gray-500  "></div>
                      <div className="h-[22px] my-2 mx-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                      <div className="h-[22px] w-[40%] my-2 mx-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                      <div className="flex">
                        <div className="h-[22px]  w-[40%] my-2 mx-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                        <div className="h-[22px]  w-[40%] my-2 ml-4 rounded-3xl bg-slate-300  dark:bg-gray-500  "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainTilt;
