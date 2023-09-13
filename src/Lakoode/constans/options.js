// import Navigationn from "../components/Navigation";
import { FaBath, FaBed } from "react-icons/fa";
import { GoHomeFill, GoHome } from "react-icons/go";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import {
  FaWifi,
  FaDumpsterFire,
  FaDesktop,
  FaCircleNotch,
} from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";
import { LiaSwimmingPoolSolid, LiaDumpsterFireSolid } from "react-icons/lia";
import { RiBilliardsFill, RiParkingBoxLine } from "react-icons/ri";
import {
  PiFanBold,
  PiSunHorizonBold,
  PiGameControllerBold,
} from "react-icons/pi";
import {
  GiComputerFan,
  GiVacuumCleaner,
  GiTap,
  GiCctvCamera,
  GiSecurityGate,
  GiForkKnifeSpoon,
  GiHockey,
  GiThroneKing,
  GiBarbecue,
  GiTowel,
} from "react-icons/gi";
import { BiHomeCircle, BiFootball } from "react-icons/bi";
import {
  MdOutlineTableBar,
  MdOutlineBathtub,
  MdOutlineLocalLaundryService,
  MdOutlineKitchen,
  MdOutlineSoupKitchen,
  MdOutlineGasMeter,
  MdOutlinePower,
  MdOutlinePowerInput,MdDryCleaning,MdOutlineCleanHands
} from "react-icons/md";
import { LuSofa, LuMicrowave, LuRadioReceiver } from "react-icons/lu";
import {
  PiHardDrives,
  PiToiletPaperDuotone,
  PiBugBeetleDuotone,
  PiToiletDuotone,
} from "react-icons/pi";
import {
  TbTeapot,
  TbIroningSteam,
  TbClothesRack,
  TbPingPong,TbWashTemperature5
} from "react-icons/tb";
export const optiona = [
  { id: 1, icon: <MdOutlineSoupKitchen />, title: "آشپزخانه" },
  { id: 2, icon: <GiForkKnifeSpoon />, title: "لوازم سرو غذا" },
  { title: "ماشین لباسشویی", id: 3, icon: <MdOutlineLocalLaundryService /> },
  { title: "یخچال", id: 4, icon: <MdOutlineKitchen /> },
  { title: "چایی ساز", id: 5, icon: <TbTeapot /> },
  { title: "مایکروویو", id: 6, icon: <LuMicrowave /> },

  // // refEM

  { title: "منظره به حیاط", id: 10, icon: <BiHomeCircle /> },
  { title: "میز ناهارخوری", id: 11, icon: <MdOutlineTableBar /> },
  { title: "تلویزیون", id: 12, icon: <FaDesktop /> },
  { title: "گاز", id: 14, icon: <MdOutlineGasMeter /> },
  { title: "برق", id: 15, icon: <MdOutlinePower /> },
  { title: "آب", icon: <GiTap /> },
  { title: "مبلمان", id: 17, icon: <LuSofa /> },
  { title: "جاروبرقی", id: 18, icon: <GiVacuumCleaner /> },
  { title: "کمد/دراور", id: 19, icon: <PiHardDrives /> },
  // { title: "کمد/دراور", id: 19, icon: <PiHardDrives /> },
  { title: "اتو", id: 21, icon: <TbIroningSteam /> },
  { title: "رخت آویز", id: 20, icon: <MdDryCleaning /> },
  { title: "گیرنده دیجیتال", id: 22, icon: <LuRadioReceiver /> },
  { title: "باربیکیو", id: 23, icon: <GiBarbecue /> },
  { title: "شامپو", id: 24, icon: <FaCircleNotch /> },
  { title: "حوله", id: 25, icon: <GiTowel /> },
  { title: "سشوار", id: 27, icon: <MdOutlinePowerInput /> },
  // { id: 22, icon: <LuRadioReceiver /> },
  { title: "آلاچیق", id: 28, icon: <GoHome /> },

  // // bath

  { title: "حمام", id: 56, icon: <MdOutlineBathtub /> },
  { title: "سرویس ایرانی", id: 57, icon: <PiToiletPaperDuotone /> },
  { title: "سرویس فرنگی", id: 58, icon: <PiToiletDuotone /> },

  // refKH
  { title: "پارکینگ", id: 36, icon: <RiParkingBoxLine /> },
  { title: "سم پاشی دوره ای", id: 37, icon: <PiBugBeetleDuotone /> },
  { title: "نظافت مستمر", id: 40 ,icon:<MdOutlineCleanHands/>},
  { title: "شستشو ملافه ها", id: 41 ,icon:<TbWashTemperature5/>},
  // security
  { title: "دوربین مدار بسته", id: 61, icon: <GiSecurityGate /> },
  { title: "نگهبان", id: 62, icon: <GiCctvCamera /> },

  // sarma
  { title: "کولر گازی", id: 31, icon: <GiComputerFan /> },
  { title: "رادیاتور", id: 32, icon: <FaDumpsterFire /> },
  { title: "پنکه سقفی", id: 33, icon: <PiFanBold /> },
  { title: "بخاری", id: 34, icon: <LiaDumpsterFireSolid /> },

  // // taf
  { title: "بیلیارد", id: 46, icon: <RiBilliardsFill /> },
  { title: "استخر", id: 47, icon: <LiaSwimmingPoolSolid /> },
  { title: "شاه نشین", id: 48, icon: <GiThroneKing /> },
  { title: "wifi", id: 50, icon: <FaWifi /> },
  { title: "فوتبال دستی", id: 51, icon: <BiFootball /> },
  { title: "ایر هاکی", id: 53, icon: <GiHockey /> },
  { title: "کنسول بازی", id: 49, icon: <PiGameControllerBold /> },
  { title: "پینگ پنگ", id: 52, icon: <TbPingPong /> },
  { title: "منظره به دریا", id: 54, icon: <PiSunHorizonBold /> },

];
 