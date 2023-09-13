import axios from "axios";
import React, { useEffect, useState } from "react";

const CalandreD = ({
  seletedDaysOnCal,
  mounth,
  villa,
  rangeDays,
  setRangeDays,
  state,
  year,
  setyear,
  setState,
}) => {
  const optionsD = {
    day: "numeric",
  };
  const optionsW = {
    weekday: "long",
  };

  const optionsM = {
    month: "numeric",
  };

  const dayStructure = [
    ["0", 1, 8, 15, 22, 29],
    ["1", 2, 9, 16, 23, 30],
    ["2", 3, 10, 17, 24, 31],
    ["3", 4, 11, 18, 25],
    ["4", 5, 12, 19, 26],
    ["5", 6, 13, 20, 27],
    ["6", 7, 14, 24, 28],
  ];

  const week = [
    [0, "شنبه"],
    [1, "یکشنبه"],
    [2, "دوشنبه"],
    [3, "سه شنبه"],
    [4, "چهارشنبه"],
    [5, "پنج شنبه"],
    [6, "جمعه"],
  ];
  const tr = [
    [0, 7],
    [7, 14],
    [14, 21],
    [21, 28],
    [28, 35],
    [35, 42],
  ];
  const [calData, setCalData] = useState([]);
  const nowDayToday = parseInt(
    new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsD)
  );
  const nowMonthToday = parseInt(
    new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsM)
  );
  useEffect(() => {
    //   villa &&
    axios({
      withCredentials: true,
      method: "post",
      url: `https://localhost:7103/api/Admin/Reservation/GetPricedDays?villaId=${villa}&month=${mounth[0]}&year=${year}`,
    }).then(function (response) {
      let oo = response.data.data[0].date.split("T")[0].toString();
      let nowweekk = new Date(oo).toLocaleDateString(
        "fa-IR-u-nu-latn",
        optionsW
      );
      const nowDay = new Date(oo).toLocaleDateString(
        "fa-IR-u-nu-latn",
        optionsD
      );

      let qwe = [
        parseInt(nowDay),
        nowweekk === "شنبه"
          ? 0
          : nowweekk === "یکشنبه"
          ? 1
          : nowweekk === "دوشنبه"
          ? 2
          : nowweekk === "سه‌شنبه"
          ? 3
          : nowweekk === "چهارشنبه"
          ? 4
          : nowweekk === "پنجشنبه"
          ? 5
          : nowweekk === "جمعه"
          ? 6
          : "",
      ];
      const indexOfDayinStructure = dayStructure.findIndex((p) =>
        p.find((d) => d === qwe[0])
      );
      const weekDiff =
        qwe[1] - parseInt(dayStructure[indexOfDayinStructure][0]);

      setCalData([Array.from(Array(weekDiff).keys()), response.data?.data]);
    });
  }, [state]);

  let seletedDays = [];

  if (rangeDays.f !== "" && rangeDays.s === "") {
    seletedDays.push(
      parseInt(
        new Date(rangeDays.f.date.split("T")[0]).toLocaleDateString(
          "fa-IR-u-nu-latn",
          optionsD
        )
      )
    );
  }

  if (
    rangeDays.f !== "" &&
    rangeDays.s !== "" &&
    parseInt(
      new Date(rangeDays.f.date.split("T")[0]).toLocaleDateString(
        "fa-IR-u-nu-latn",
        optionsD
      )
    ) >
      new Date(rangeDays.s.date.split("T")[0]).toLocaleDateString(
        "fa-IR-u-nu-latn",
        optionsD
      )
  ) {
    for (
      let i = parseInt(
        new Date(rangeDays.s.date.split("T")[0]).toLocaleDateString(
          "fa-IR-u-nu-latn",
          optionsD
        )
      );
      i <=
      parseInt(
        new Date(rangeDays.f.date.split("T")[0]).toLocaleDateString(
          "fa-IR-u-nu-latn",
          optionsD
        )
      );
      i++
    ) {
      seletedDays.push(i);
    }
  }

  if (
    rangeDays.f !== "" &&
    rangeDays.s !== "" &&
    new Date(rangeDays.f.date.split("T")[0]).toLocaleDateString(
      "fa-IR-u-nu-latn",
      optionsD
    ) <
      new Date(rangeDays.s.date.split("T")[0]).toLocaleDateString(
        "fa-IR-u-nu-latn",
        optionsD
      )
  ) {
    for (
      let i = parseInt(
        new Date(rangeDays.f.date.split("T")[0]).toLocaleDateString(
          "fa-IR-u-nu-latn",
          optionsD
        )
      );
      i <=
      parseInt(
        new Date(rangeDays.s.date.split("T")[0]).toLocaleDateString(
          "fa-IR-u-nu-latn",
          optionsD
        )
      );
      i++
    ) {
      seletedDays.push(i);
    }
  }

  const oneHand = (d) => {
    setRangeDays({ f: d, s: "", y: year, m: mounth[0] });
  };
  // const twoHand = (d) => {
  //   if (
  //     parseInt(
  //       new Date(rangeDays.f.date.split("T")[0]).toLocaleDateString(
  //         "fa-IR-u-nu-latn",
  //         optionsD
  //       )
  //     ) ==
  //     parseInt(
  //       new Date(d.date.split("T")[0]).toLocaleDateString(
  //         "fa-IR-u-nu-latn",
  //         optionsD
  //       )
  //     )
  //   ) {
  //     setRangeDays({
  //       f: "",
  //       s: "",
  //       y: year,
  //       m: mounth[0],
  //     });
  //     // console.log(55)
  //   }
  //   if (
  //     parseInt(
  //       new Date(rangeDays.f.date.split("T")[0]).toLocaleDateString(
  //         "fa-IR-u-nu-latn",
  //         optionsD
  //       )
  //     ) >
  //     parseInt(
  //       new Date(d.date.split("T")[0]).toLocaleDateString(
  //         "fa-IR-u-nu-latn",
  //         optionsD
  //       )
  //     )
  //   ) {
  //     setRangeDays({
  //       f: d,
  //       s: "",
  //       y: year,
  //       m: mounth[0],
  //     });
  //   }
  //   if (
  //     parseInt(
  //       new Date(rangeDays.f.date.split("T")[0]).toLocaleDateString(
  //         "fa-IR-u-nu-latn",
  //         optionsD
  //       )
  //     ) <
  //     parseInt(
  //       new Date(d.date.split("T")[0]).toLocaleDateString(
  //         "fa-IR-u-nu-latn",
  //         optionsD
  //       )
  //     )
  //   ) {
  //     setRangeDays({
  //       f: rangeDays.f,
  //       s: d,
  //       y: year,
  //       m: mounth[0],
  //     });
  //   }
  // };

  const twoHand = (d) => {
    if (
      new Date(rangeDays.f.date?.split("T")[0]).toISOString().split("T")[0] ==
      new Date(d.date?.split("T")[0]).toISOString().split("T")[0]
    ) {
      setRangeDays({
        f: "",
        s: "",
        y: year,
        m: mounth[0],
      });
      // console.log(55)
    }
    if (
      new Date(rangeDays.f.date?.split("T")[0]).toISOString().split("T")[0] >
      new Date(d.date?.split("T")[0]).toISOString().split("T")[0]
    ) {
      setRangeDays({
        f: d,
        s: "",
        y: year,
        m: mounth[0],
      });
    }
    if (
      new Date(rangeDays.f.date?.split("T")[0]).toISOString().split("T")[0] <
      new Date(d.date?.split("T")[0]).toISOString().split("T")[0]
    ) {
      setRangeDays({
        f: rangeDays.f,
        s: d,
        y: year,
        m: mounth[0],
      });
    }
  };

  const treeHand = (d) => {
    setRangeDays({ f: d, s: "", y: year, m: mounth[0] });
  };
  const optionsY = {
    year: "numeric",
  };

  let nowYear = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsY);
  // console.log(seletedDaysOnCal)
  return (
    <table className="bg-white dark:bg-border rounded-3xl lg:w-[60vw] w-[100vw]  ">
      <thead className="w-[80px]">
        <th>
          <div className="faNumber justify-end flex bg-white dark:bg-transparent py-5  rounded-t-3xl  sm:px-2">
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
      <tbody className="faNumber">
        {tr.map((t) => (
          <tr key={t[0]}>
            {calData
              ?.flat()
              ?.slice(t[0], t[1])
              .map((d, index) =>
                d === 0 ||
                d === 1 ||
                d === 2 ||
                d === 3 ||
                d === 4 ||
                d === 5 ||
                d === 6 ||
                d === 7 ? (
                  <td key={index} className={`text-center text-sm `}>
                    <div
                      className={` rounded-2xl   h-[70px] lg:h-[75px] flex flex-col justify-center duration-200 `}
                    ></div>
                  </td>
                ) : (
                  <td
                    key={d.shamsiDate.split("/")[2]}
                    className={` text-center text-sm `}
                  >
                    <div
                      onClick={() => {
                        if (mounth[0] === nowMonthToday) {
                          rangeDays.f === "" &&
                          rangeDays.s === "" &&
                          d.isPriced &&
                          !d.isReserved &&
                          parseInt(d.shamsiDate.split("/")[2]) >= nowDayToday
                            ? oneHand(d)
                            : rangeDays.f !== "" &&
                              rangeDays.s === "" &&
                              d.isPriced &&
                              parseInt(d.shamsiDate.split("/")[2]) >=
                                nowDayToday
                            ? twoHand(d)
                            : rangeDays.f !== "" &&
                              rangeDays.s !== "" &&
                              d.isPriced &&
                              !d.isReserved &&
                              parseInt(d.shamsiDate.split("/")[2]) >=
                                nowDayToday
                            ? treeHand(d)
                            : "";
                        } else {
                          rangeDays.f === "" &&
                          rangeDays.s === "" &&
                          !d.isReserved &&
                          d.isPriced
                            ? oneHand(d)
                            : rangeDays.f !== "" &&
                              rangeDays.s === "" &&
                              d.isPriced
                            ? twoHand(d)
                            : rangeDays.f !== "" &&
                              rangeDays.s !== "" &&
                              !d.isReserved &&
                              d.isPriced
                            ? treeHand(d)
                            : "";
                        }
                      }}
                      className={`m-[2px] lg:m-1
                       ${
                         mounth[0] === nowMonthToday &&
                         parseInt(d.shamsiDate.split("/")[2]) === nowDayToday &&
                         "border-btn border-2"
                       }
                       ${
                         mounth[0] === nowMonthToday &&
                         d.shamsiDate.split("/")[2] < nowDayToday &&
                         "text-gray-500"
                       }
                        ${
                          seletedDaysOnCal.find(
                            (day) => day == d.date.split("T")[0]
                          ) ||
                          rangeDays.f == d ||
                          rangeDays.s == d
                            ? "bg-btn dark:bg-btn text-white"
                            : "dark:bg-textPDark dark:bg-opacity-30 hover:dark:bg-gray-600 hover:bg-gray-200  bg-screenLight "
                        }
                         rounded-2xl cursor-pointer  h-[70px] lg:h-[75px] flex flex-col justify-center duration-200 `}
                    >
                      <div className={`text-[18px]`}>
                        {d.shamsiDate.split("/")[2]}
                      </div>
                      <div
                        className={`  flex font-semibold justify-center 
                          
                          ${
                            seletedDaysOnCal.find(
                              (day) =>
                                day == d.date.split("T")[0] ||
                                rangeDays.f == d ||
                                rangeDays.s == d
                            )
                              ? "text-white"
                              : " text-blue-500"
                          } 
                          ${
                            mounth[0] === nowMonthToday &&
                            d.shamsiDate.split("/")[2] < nowDayToday &&
                            "text-gray-500 "
                          }
                         `}
                      >
                        {(mounth[0] === nowMonthToday &&
                          d.shamsiDate.split("/")[2] < nowDayToday) ||
                        d.isReserved ? (
                          <p className="text-gray-500">رزرو شده</p>
                        ) : d.isPriced ? (
                          parseInt(
                            (d.price - d.disscount).toString().slice(0, -3)
                          ).toLocaleString()
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </td>
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CalandreD;
