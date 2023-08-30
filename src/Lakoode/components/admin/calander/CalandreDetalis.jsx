import { useEffect, useState } from "react";
import { FiChevronsUp } from "react-icons/fi";
const CalandreDetalis = ({
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

  for (let i = specialIncPrice[1]; i <= specialIncPrice[2]; i++) {
    sip.push(i);
  }
  const dec = [];
  for (let i = discount[1]; i <= discount[2]; i++) {
    dec.push(i);
  }

  let seletedDays = [];

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
  const [hoverDay, sethoverDay] = useState();
  const [first, setferst] = useState("");
  let hoveredDay = [];
  if (first !== "" && hoverDay !== "") {
    if (first > hoverDay) {
      for (let i = hoverDay; i < first; i++) {
        hoveredDay.push(i);
      }
    }
    if (first < hoverDay) {
      for (let i = first + 1; i <= hoverDay; i++) {
        hoveredDay.push(i);
      }
    }
  }

  // console.log(seletedDays);
  const oneHand = (d) => {
    setferst(d);
    setRangeDays({ f: d, s: "", y: year, m: mounth[0] });
  };
  const twoHand = (d) => {
    setferst("");
    if (rangeDays.f === d) {
      setRangeDays({
        f:'',
        s: '',
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
    setferst(d);
    setRangeDays({ f: d, s: "", y: year, m: mounth[0] });
  };
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
        <tbody onMouseLeave={() => setferst("")} className="faNumber">
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
                    onMouseEnter={() => sethoverDay(d)}
                    onClick={() =>
                      rangeDays.f === "" && rangeDays.s === ""
                        ? oneHand(d)
                        : rangeDays.f !== "" && rangeDays.s === ""
                        ? twoHand(d)
                        : rangeDays.f !== "" && rangeDays.s !== ""
                        ? treeHand(d)
                        : ""
                    }
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
                    } ${
                      seletedDays.find((day) => day === d) ||
                      rangeDays.f === d ||
                      rangeDays.s === d
                        ? "bg-btn text-white bg-opacity-90"
                        : "dark:bg-textPDark dark:bg-opacity-30 hover:dark:bg-gray-600 hover:bg-gray-200 "
                    } ${
                      hoveredDay.find((day) => day === d) &&
                      "dark:bg-gray-400 bg-gray-200"
                    }  rounded-2xl h-[70px] lg:h-[75px] flex flex-col justify-center duration-200 `}
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
                        className={`text-sm text-gray-500 ${
                          (seletedDays.find((day) => day === d) ||
                            rangeDays.f === d ||
                            rangeDays.s === d) &&
                          "text-white"
                        } `}
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
                    ) : dec.find((dec) => d === dec) &&
                      ((d >= nowDay && thitM) || !thitM) ? (
                      <div
                        className={`text-[12px] flex font-semibold  justify-center text-green-500 ${
                          (seletedDays.find((day) => day === d) ||
                            rangeDays.f === d ||
                            rangeDays.s === d) &&
                          "text-white"
                        } `}
                      >
                        {parseInt(
                          ((price * (100 - discount[3])) / 100)
                            .toString()
                            .slice(0, -3)
                        ).toLocaleString()}{" "}
                        <FiChevronsUp className="self-center rotate-180" />
                      </div>
                    ) : incP.find((incP) => d === incP) &&
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
                          incPrice.toString().slice(0, -3)
                        ).toLocaleString()}{" "}
                        <FiChevronsUp className="self-center" />
                      </div>
                    ) : rd.find((rd) => d !== rd) &&
                      d !== "" &&
                      ((d >= nowDay && thitM) || !thitM) ? (
                      <div
                        className={`text-[12px] flex font-semibold ${
                          (seletedDays.find((day) => day === d) ||
                            rangeDays.f === d ||
                            rangeDays.s === d) &&
                          "text-white"
                        } justify-center text-blue-500`}
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

export default CalandreDetalis;
