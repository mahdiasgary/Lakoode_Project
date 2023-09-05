import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const Tiltt = ({ villa, defaultOptions }) => {
  const tafREf = [
    { title: "بیلیارد", id: 24 },
    { title: "استخر", id: 25 },
    { title: "شاه نشین", id: 26 },
  ];
  const optionsM = {
    month: "numeric",
  };
  const optionsY = {
    year: "numeric",
  };
  let nowyear = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsY);
  let nowmonth = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsM);
  let nowDate = new Date().toLocaleDateString("fa-IR-u-nu-latn");
  const [calData, setCalData] = useState([]);
  const [calDataNow, setCalDataNow] = useState();

  useEffect(() => {
    axios({
      method: "post",
      url: `https://localhost:7103/api/Reservation/GetPricedDays?villaId=${
        villa.id
      }&month=${nowmonth}&year=${nowyear}`,
    }).then(function (response) {
      let indexoNow = response.data?.data?.findIndex(
        (d) => d.shamsiDate === nowDate
      );
      setCalDataNow(response.data?.data[indexoNow]);
      setCalData(response.data?.data);
    });
  }, []);
  //   console.log(calDataNow);

  return (
    <div>
      {" "}
      <Link
        key={villa.id}
        to={{
          pathname: `/villapage/${villa.id}`,
          state: { id: villa.id, price: calData, priceToday: calDataNow },
        }}
      >
        <Tilt options={defaultOptions}>
          <div
            className={` bg-white dark:backdrop-blur-sm dark:text-white dark:bg-border dark:bg-opacity-50  dark:border-0 dark:border-border border my-4 cursor-pointer w-[80vw] sm:w-[330px] sm:h-[400px] rounded-3xl shadow-2xl  md:m-5 flex flex-col justify-between`}
          >
            <div>
              <div className="relative">
                <img
                  className="rounded-t-3xl w-full h-[220px]"
                  src={`https://localhost:7103/api/Villa/GetImage?imageName=${villa.images[0].imageName}`}
                  alt="لاکوده"
                />
                <div
                  className={`${
                    calDataNow?.disscount === 0 && "hidden"
                  } absolute top-2 right-2 text-white  bg-blue-500 px-2 rounded-xl text-sm font-semibold py-1`}
                >
                  تخفیف ویژه
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold mx-4 mt-3">
                  <p className="text-[18px]">{villa.name} </p>
                  <p>ID : {villa.id} </p>
                </div>
                <ul className="flex mx-2">
                  {JSON.parse(villa.villaFacilities).map((opt, index) => (
                    <li
                      key={index}
                      className={`${
                        (opt > 26 || opt < 24) && "hidden"
                      }  text-blue-500 dark:text-white dark:bg-btn dark:bg-opacity-60 dark:border-0 border-blue-500 flex mx-1 flex-col justify-center border rounded-xl w-[45px]  cursor-pointer h-[45px]  my-1 `}
                    >
                      <div className="flex justify-center text-[16px]">
                        {tafREf[tafREf.findIndex((v) => v.id === opt)]?.title}
                      </div>
                      <p className="text-center text-[10px] font-semibold">
                        {tafREf[tafREf.findIndex((v) => v.id === opt)]?.title}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="faNumber text-sm font-semibold text-gray-400 mx-4 ">
                  ویلا {JSON.parse(villa.roomCount)[0]}خواب تا ظرفیت{" "}
                  {JSON.parse(villa.roomCount)[5]} نفر{" "}
                </p>
              </div>
            </div>
            <div className="flex mx-4 mb-2 py-3 justify-between text-blue-5 ">
              <div className="flex flex-col">
                <p className="text-gray-700 dark:text-textPlight text-sm">
                  شروع قیمت هر شب :{" "}
                </p>
                <div
                  className={`${
                    calDataNow?.disscount === 0 && "hidden"
                  } faNumber w-[120px] flex text-white text-center pt-1  px-1 bg-blue-500  self-  rounded-xl text- font-semibold`}
                >
                  <p>
                    {parseInt(
                      calDataNow?.disscount?.toString().slice(0, -3)
                    ).toLocaleString()}
                  </p>
                  <span className="text-[12px] self-start pr-1">
                    هزار تومان تخفیف
                  </span>
                </div>
              </div>
              <div className="flex ">
                <div className="flex flex-col   ">
                  <p className="font-bold text-[20px] faNumber ">
                    {(
                      (calDataNow?.price - calDataNow?.disscount) /
                      100
                    ).toLocaleString()}
                  </p>
                  <div className="w-full">
                    <div className="flex justify-between ">
                      <p
                        className={`${
                          calDataNow?.disscount === 0 && "hidden"
                        } faNumber font-bold text-sm self-center line-through mr-2 text-gray-400`}
                      >
                        {calDataNow?.price?.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative font-semibold text-sm mr-1 self-start mt-2">
                  <p>توما</p>
                  <div className="absolute -top-3 right-3 ">
                    <p>ن</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </Link>
    </div>
  );
};

export default Tiltt;