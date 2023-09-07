
import { Link } from "react-router-dom";
import Tiltt from "./Tilt";
import axios from "axios";
import { useEffect, useState } from "react";

const MainTilt = ({ priceRange, selectetOpt, priceRoom }) => {

  const [data,setData]=useState([])
  useEffect(()=>{

    ;   axios.get('https://localhost:7103/api/Villa/GetAll/',{withCredentials:true}).then((r) => {
      setData(r.data);
    }).catch(r=>console.log(r))

  },[])

  // console.log(data?.data)
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
//   const filrered = villas.filter((v) => {
//     return (
//       v.price <= priceRange[1] &&
//       priceRange[0] <= v.price &&
//       priceRoom.find(
//         (r) => r == v.villa.ditails.sleep.room || priceRoom === ""
//       ) &&
//       v.villa.options.some((ai) => selectetOpt.includes(ai.name))
//     );
//   });
const tafREf = [
  { title: "بیلیارد", id: 24 },
  { title: "استخر", id: 25 },
  { title: "شاه نشین", id: 26 },
];
  return (
    <div
      id="about-me"
      className="dark:text-white text-[16px] relative mt-36 -top-24  md:top-0 "
    >
      <div className="flex justify-center">
        {/* {filrered.length === 0 ? (
          <p className="text-[20px] mt-0 lg:my-16">
            ویلایی با توجه فیلتر شما یافت نشد:(
          </p>
        ) : (
          <p className="">ویلای مورد نظر را انتخاب کنید!</p>
        )} */}
      </div>
      <div className="flex justify-center ">
        <div className="flex  bg-opacity-50 w-[100vw] md:w-[90vw] flex-col justify-between rounded-3xl">
          <div className="flex justify-center ">
            <div
              id="skills"
              className={`md:mx-16  duration-500  rounded-3xl z-[5] w-[80vw] lg:w-[80vw] max-w-[1040px]   grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center`}
            >
              {data?.data?.length === 0 ? (
                <div className="text-center w-full"></div>
              ) : (
                data?.data?.map((villa, index) => (
                 <Tiltt villa={villa} defaultOptions={defaultOptions}/>
                
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MainTilt;
