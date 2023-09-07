import axios from "axios";
import React, { useEffect, useState } from "react";

const ClanderForEveryMounth = ({
  rangeDaysForUpdate,
  setRangeDaysForUpdate,
  mounth,
  villa,
  rangeDays,
  setRangeDays,
  state,
  setState,
  year,
  setyear,
}) => {
  const optionsD = {
    day: "numeric",
  };
  const optionsW = {
    weekday: "long",
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
  let nowweekk = new Date("2024-10-20").toLocaleDateString(
    "fa-IR-u-nu-latn",
    optionsW
  );
  console.log(nowweekk);
  const [calData, setCalData] = useState([]);
  useEffect(() => {
    axios({
      method: "post",
      url: `https://localhost:7103/api/Reservation/GetPricedDays?villaId=${villa}&month=${mounth[0]}&year=${year}`,
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
    seletedDays.push(rangeDays.f);
  }

  if (rangeDays.f !== "" && rangeDays.s !== "" && rangeDays.f > rangeDays.s) {
    for (let i = rangeDays.s; i <= rangeDays.f; i++) {
      seletedDays.push(i);
    }
  }

  if (rangeDays.f !== "" && rangeDays.s !== "" && rangeDays.f < rangeDays.s) {
    for (let i = rangeDays.f; i <= rangeDays.s; i++) {
      seletedDays.push(i);
    }
  }

  const oneHand = (d) => {
    setRangeDaysForUpdate({
      y:year,
      day: "",
      m: "",
    });
    setRangeDays({ f: d, s: "", y: year, m: mounth[0] });
  };
  const twoHand = (d) => {
    setRangeDaysForUpdate({
      y:year,
      day: "",
      m: "",
    });
    if (rangeDays.f === d) {
      setRangeDays({
        f: "",
        s: "",
        y: year,
        m: mounth[0],
      });
    } else {
      setRangeDays({
        f: rangeDays.f,
        s: d,
        y: year,
        m: mounth[0],
      });
    }
  };
  const treeHand = (d) => {
    setRangeDaysForUpdate({
      y:year,
      day: "",
      m: "",
    });
    setRangeDays({ f: d, s: "", y: year, m: mounth[0] });
  };

  const handfour = (d) => {
    setRangeDays({ f: "", s: "", y: year, m: mounth[0] });
    setRangeDaysForUpdate({
      y:year,
      day: d,
      m: mounth[0],
    });
  };
  const optionsY = {
    year: "numeric",
  };

  let nowYear = new Date().toLocaleDateString("fa-IR-u-nu-latn", optionsY);
  return (
    <div className={`relative`}>
      <table className="bg-white dark:bg-border rounded-3xl lg:w-[60vw]  ">
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
                    <td key={index} className={`sm:p-1 text-center text-sm `}>
                      <div
                        className={` rounded-2xl   h-[70px] lg:h-[75px] flex flex-col justify-center duration-200 `}
                      ></div>
                    </td>
                  ) : (
                    <td
                      key={d.shamsiDate.split("/")[2]}
                      className={`  text-center text-sm `}
                    >
                      <div
                        onClick={() =>
                          d.isPriced
                            ? handfour(parseInt(d.shamsiDate.split("/")[2]))
                            : rangeDays.f === "" && rangeDays.s === ""
                            ? oneHand(parseInt(d.shamsiDate.split("/")[2]))
                            : rangeDays.f !== "" && rangeDays.s === ""
                            ? twoHand(parseInt(d.shamsiDate.split("/")[2]))
                            : rangeDays.f !== "" && rangeDays.s !== ""
                            ? treeHand(parseInt(d.shamsiDate.split("/")[2]))
                            : ""
                        }
                        className={` ${
                          seletedDays.find(
                            (day) => day == d.shamsiDate.split("/")[2]
                          ) ||
                          d.shamsiDate.split("/")[2] == rangeDaysForUpdate.day
                            ? "bg-btn dark:bg-btn text-white"
                            : "dark:bg-textPDark dark:bg-opacity-30 hover:dark:bg-gray-600 hover:bg-gray-200  bg-screenLight "
                        } m-[2px] lg:m-1  rounded-lg md:rounded-2xl cursor-pointer  h-[70px] lg:h-[75px] flex flex-col justify-center duration-200 `}
                      >
                        <div className={`text-[18px]`}>
                          {d.shamsiDate.split("/")[2]}
                        </div>
                        <div
                          className={`  flex font-semibold justify-center ${
                            seletedDays.find(
                              (day) => day == d.shamsiDate.split("/")[2]
                            ) ||
                            d.shamsiDate.split("/")[2] == rangeDaysForUpdate.day || d===rangeDays.f
                              ? "text-white"
                              : " text-blue-500"
                          } `}
                        >
                          {d.isPriced &&
                            parseInt(
                              (d.price - d.disscount).toString().slice(0, -3)
                            ).toLocaleString()}{" "}
                        </div>
                      </div>
                    </td>
                  )
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClanderForEveryMounth;
