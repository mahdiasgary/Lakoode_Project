import { useEffect, useState } from "react";
import { FiChevronsUp } from "react-icons/fi";
const VillaClanderItem = ({
  year,
  rd,
  mounth,
  thitM,
  price,
  incPrice,
  specialIncPrice,
  discount,
  discountPr,
  nowYear,
  nowMnum,
  setRangeDays,
  rangeDays,
}) => {
  const incP = mounth[3];
  const week = [
    [0, "شنبه"],
    [1, "یکشنبه"],
    [2, "دوشنبه"],
    [3, "سه شنبه"],
    [4, "چهارشنیه"],
    [5, "پنج شنبه"],
    [6, "جمعه"],
  ];
  const optionsW = {
    weekday: "long",
  };
  let nowweekk = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsW);
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const tr = [
    [0, 7],
    [7, 14],
    [14, 21],
    [21, 28],
    [28, 35],
    [35, 42],
  ];

  const optionsD = {
    day: "numeric",
  };

  const nowDay = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsD);
  for (let i = 0; i < mounth[1]; i++) {
    days.unshift("");
  }
  const sip = [];


  let seletedDays = [];

  
  let qwe = [
    parseInt(nowDay),
    nowweekk === "شنبه"
      ? 0
      : nowweekk === "یکشنبه"
      ? 1
      : nowweekk === "دوشنبه"
      ? 2
      : nowweekk === "سه شنبه"
      ? 3
      : nowweekk === "چهارشنبه"
      ? 4
      : nowweekk === "پنج شنبه"
      ? 5
      : nowweekk === "جمعه"
      ? 6
      : "",
  ];

  const dayStructure = [
    ["0", 1, 8, 15, 22, 29],
    ["1", 2, 9, 16, 23, 30],
    ["2", 3, 10, 17, 24],
    ["3", 4, 11, 18, 25],
    ["4", 5, 12, 19, 26],
    ["5", 6, 13, 20, 27],
    ["6", 7, 14, 24, 28],
  ];

  const indexOfDayinStructure = dayStructure.findIndex((p) =>
    p.find((d) => d === qwe[0])
  );
  const weekDiff = qwe[1] - parseInt(dayStructure[indexOfDayinStructure][0]);
  
  
  return (
    <div
      className={`relative ${
        nowYear == year && mounth[0] < nowMnum && "hidden"
      } `} 
    >
      <table className="bg-white dark:bg-border rounded-3xl lg:w-[60vw]  ">
        <thead className="w-[80px]">
          <th>
            <div className="faNumber bg-white dark:bg-transparent py-5 text-end rounded-t-3xl flex justify-end sm:px-2">
              {year}
            </div>
          </th>
          <th>
            <div className="faNumber bg-white dark:bg-transparent py-3 rounded-t-3xl flex">
              {mounth[2]}
            </div>
          </th>
        </thead>
        <thead>
          {week.map((w) => (
            <th
              key={w}
              className="w-[70px]  min-w-[50px] text-sm font-semibold  mt-1"
            >
              {w[1]}
            </th>
          ))}
        </thead>
        <tbody  className="faNumber">
          {tr.map((t) => (
            <tr key={t[0]}>
              {days.slice(t[0], t[1]).map((d) => (
                <td
                  key={d}
                  className={`sm:p-1 text-center text-sm ${
                    d === parseInt(nowDay) &&
                    thitM &&
                    !rd.find((rd) => d === rd)
                      ? "text-blue-500"
                      : d < nowDay && thitM
                      ? "text-gray-400"
                      : rd.find((rd) => d === rd)
                      ? "text-gray-500"
                      : ""
                  }`}
                >
                  <div
                    
                    className={`${d === "" && "hidden"} ${
                      (d === mounth[4] ||
                        (d === 31 && mounth[2] === "اسفند")) &&
                      "hidden"
                    } ${
                      d === parseInt(nowDay) && thitM
                        ? `border-2 border-blue-500  `
                        : d !== ""
                        ? "border dark:border-0  cursor-pointer"
                        : ""
                    }
                 
                       rounded-2xl h-[70px] lg:h-[75px] flex flex-col justify-center duration-200 `}
                  >
                    <div
                      className={`text-[18px] ${
                        (rd.find((rd) => d === rd) || (d < nowDay && thitM)) &&
                        "line-through"
                      }`}
                    >
                      {d}
                    </div>



                    {rd.find((rd) => d === rd) &&
                    ((d >= nowDay && thitM) || !thitM) ? (
                      <div
                        className={`text-sm text-gray-500  `}
                      >
                        رزرو شده
                      </div>
                    ) : sip.find((sip) => d === sip) &&
                      ((d >= nowDay && thitM) || !thitM) ? (
                      <div
                        className={`text-[12px] flex font-semibold justify-center text-red-500 ${
                          (seletedDays.find((day) => day === d) ||
                            rangeDays.f === d ||
                            rangeDays.s === d) &&
                          "text-white"
                        } `}
                      >
                        {parseInt(
                          specialIncPrice[3].toString().slice(0, -3)
                        ).toLocaleString()}{" "}
                        <FiChevronsUp className="self-center" />
                      </div>
                    ) :rd.find((rd) => d !== rd) &&
                      d !== "" &&
                      ((d >= nowDay && thitM) || !thitM) ? (
                      <div
                        className={`text-[12px] flex font-semibold justify-center text-blue-500`}
                      >
                        {parseInt(
                          ((price * (100 - discountPr)) / 100)
                            .toString()
                            .slice(0, -3)
                        ).toLocaleString()}{" "}
                        {/* <FiChevronsUp className="self-center" /> */}
                        {/* <FiChevronsUp className="self-center" /> */}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VillaClanderItem;


