import avatar from "../assets/avatar.png";

import {
  AiOutlineHeart,
  MdOutlineExplore,
  BiGift,
  IoNewspaperOutline,
  GiCeremonialMask,
  MdMonitor,
  BiCameraMovie,
  AiOutlineSchedule,
  FaListAlt,
  MdMenu,
  RiSlideshow3Line,
  FiUsers,
  BiComment,
  FiFilm,
  FaTheaterMasks,
  RiHome2Line,
  RiMovie2Line,
  CgAddR,
  FaRegListAlt,
  MdAddBox,
  ImEarth,
  BiDna,
  IoLanguage,
} from "../common/icons";

export const adminArtistListTh = ["ID", "IMAGE", "NAME", "BIRTHDATE"];
export const adminArtistListTd = ["id", "image", "name", "birthDate"];
export const adminMoviesListTh = [
  "ID",
  "COVER",
  "TITLE",
  "CREATED DATE",
  "TIME",
  "RELEASED DATE",
  "ACTION",
];
export const adminMoviesListTd = [
  "id",
  "image",
  "title",
  "createdDate",
  "time",
  "releasedDate",
  "action",
];
export const adminNormalListTd = ["id", "title", "action"];
export const adminNormalListTh = ["ID", "TITLE", "ACTION"];
export const adminGenreListTd = ["id", "image", "title", "action"];
export const adminGenreListTh = ["ID", "IMAGE", "TITLE", "ACTION"];
export const sidbarItem = [
  { id: 1, title: "Explore", icon: <MdOutlineExplore /> },
  { id: 2, title: "Movies", icon: <BiCameraMovie /> },
  { id: 3, title: "Series", icon: <MdMonitor /> },
  { id: 4, title: "Anime", icon: <GiCeremonialMask /> },
  { id: 5, title: "Genres", icon: <BiGift /> },
  { id: 6, title: "Favourites", icon: <AiOutlineHeart /> },
  {
    id: 7,
    title: "Theme",
    icon: <AiOutlineHeart />,
    arrow: "",
  },
  { id: 8, title: "Light Mode", icon: <AiOutlineHeart /> },

  { title: "User", icon: <IoNewspaperOutline /> },
  { title: "Coming Soon", icon: <AiOutlineSchedule /> },
];
export const adminSidbarItem = [
  // [{ id: 21, titleFa: "پیشخوان", title: "comments", icon: <BiComment /> }],

  [{ id: 1, titleFa: "داشبورد", title: "", icon:'' }],
  [
    { id: 5, titleFa: "کاربران", title: "usersl", icon: '' },
    [
      // { id: 5, titleFa: "لیست کاربران", title: "users", icon: <FiUsers /> },
      {
        id: 9,
        titleFa: "    لیست کاربران",
        title: "users",
        main: "users",
        icon1: <FaRegListAlt />,
        icon2: <FaRegListAlt />,
      },
      {
        id: 9,
        titleFa: "    افزودن کاربر جدید",
        title: "adduser",
        main: "adduser",
        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
    ],
  ],
  [
    { id: 9, titleFa: "ویلا ها ", title: "villas", icon: '' },
    [
      {
        id: 9,
        titleFa: "افزودن  ویلای جدید",
        title: "addnewvilla",
        main: "addnewvilla",
        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
      {
        id: 9,
        titleFa: "لیست ویلا ها",
        main: "villaslist",
        title: "villaslist",
        icon1: <FaRegListAlt />,
        icon2: <FaListAlt />,
      },
    ],
  ],
  [
    {
      id: 2,
      titleFa: "رزرواسیون",
      title: "reservation",
      icon: '',
    },
    [
      {
        id: 9,
        titleFa: "رزرو ویلا",
        title: "reservation",
        main: "reservation",
        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
      {
        id: 9,
        titleFa: "   تعیین قیمت",
        title: "pricedetermination",
        main: "pricedetermination",
        icon1: <CgAddR />,
        icon2: <MdAddBox />,
      },
     
    ],
  ],
  // [{ id: 20, titleFa: "نظرات", title: "comments", icon: <BiComment /> }],
];
export const footerMenu = [
  { title: "Menu", icon: <MdMenu /> },
  { title: "Movies", icon: <BiCameraMovie /> },
  { title: "Series", icon: <MdMonitor /> },
  { title: "Explore", icon: <MdOutlineExplore /> },
];

export const genres = [
  { name: "Action", imgUrl: "https://mobomoviez.fun/images/genres/action.jpg" },
  {
    name: "Adventure",
    imgUrl: "https://mobomoviez.fun/images/genres/adventure.jpg",
  },
  {
    name: "Animation",
    imgUrl: "https://mobomoviez.fun/images/genres/animation.jpg",
  },
  { name: "Comedy", imgUrl: "https://mobomoviez.fun/images/genres/comedy.jpg" },
  {
    name: "Mystery",
    imgUrl: "https://mobomoviez.fun/images/genre/mystery.jpg",
  },
  { name: "Sport", imgUrl: "https://mobomoviez.fun/images/genres/sport.jpg" },
  { name: "Horror", imgUrl: "https://mobomoviez.fun/images/genres/horror.jpg" },
  {
    name: "Documentary",
    imgUrl: "https://mobomoviez.fun/images/genres/documentary.jpg",
  },
  { name: "War", imgUrl: "https://mobomoviez.fun/images/genres/war.jpg" },
  { name: "Drama", imgUrl: "https://mobomoviez.fun/images/genres/drama.jpg" },
  { name: "Family", imgUrl: "https://mobomoviez.fun/images/genres/family.jpg" },
  {
    name: "Fantasy",
    imgUrl: "https://mobomoviez.fun/images/genres/fantasy.jpg",
  },
  {
    name: "History",
    imgUrl: "https://mobomoviez.fun/images/genres/history.jpg",
  },
  { name: "Crime", imgUrl: "https://mobomoviez.fun/images/genres/crime.jpg" },
  { name: "Music", imgUrl: "https://mobomoviez.fun/images/genres/music.jpg" },
  {
    name: "Musical",
    imgUrl: "https://mobomoviez.fun/images/genres/musical.jpg",
  },
  {
    name: "Biography",
    imgUrl: "https://mobomoviez.fun/images/genres/biography.jpg",
  },
  {
    name: "Western",
    imgUrl: "https://mobomoviez.fun/images/genres/western.jpg",
  },
  { name: "Sci-fi", imgUrl: "https://mobomoviez.fun/images/genres/sci-fi.jpg" },
];
export const trendingItem = [
  {
    id: 1630029,
    title: "Avatar: The Way of Water",
    titleType: "movie",
    year: 2022,
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 7.8,
    time: "3h 12m",
    imgUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmGggtpJ4TX3aN3PUaVWUgNODHespRPvKYAyhGUAZSqSOmPiEm",
    imgBachGrand: avatar,
  },
  {
    id: 13833688,
    title: "The Whale ",
    titleType: "movie",
    year: 2022,
    genres: ["Drama"],
    rating: 8.0,
    time: "1h 57m",
    imgUrl:
      "https://filmkio.run/wp-content/uploads/2023/01/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX500.jpg",
    imgBachGrand:
      "https://filmkio.run/wp-content/uploads/2023/02/the-whale-wallpaper.jpg",
  },

  {
    id: 9764362,
    title: "The Menu",
    titleType: "movie",
    year: 2022,
    genres: ["Comedy", "Horror"],
    rating: 7.2,
    time: "1h 47m",
    imgUrl:
      "https://filmkio.run/wp-content/uploads/2022/10/MV5BMzdjNjI5MmYtODhiNS00NTcyLWEzZmUtYzVmODM5YzExNDE3XkEyXkFqcGdeQXVyMTAyMjQ3NzQ1._V1_SX500.jpg",
    imgBachGrand:
      "https://filmkio.run/wp-content/uploads/2022/10/the-menu-poster.jpg",
  },
  {
    id: 10954600,
    title: "Ant-Man and the Wasp",
    titleType: "movie",
    year: 2023,
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 7.8,
    time: "2h 4m",
    imgUrl:
      "https://mobomoviez.fun/images/movie/2023/tt10954600/thumbnail/ant-man-and-the-wasp-quantumania-2023.jpg",
    imgBachGrand:
      "https://mobomoviez.fun/images/movie/2023/tt10954600/cover/ant-man-and-the-wasp-quantumania-2023-cover.jpg",
  },
  {
    id: 8111088,
    title: "The Mandalorian",
    titleType: "movie",
    year: 2019,
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 8.7,
    time: "2h 36m",
    imgUrl:
      "https://filmkio.run/wp-content/uploads/2022/01/the-mandalorian-poster-210x310.jpg",
    imgBachGrand:
      "https://filmkio.run/wp-content/uploads/2022/01/the-mandalorian-wallpaper.jpg",
  },
];

export const adminAddMovieListItems = [
  ["نام", "متراژ"],
  ["امکانات رفاهی", "آشپزخانه"],
  ["امکانات تفریحی", "سرمایشی گرمایشی"],
  ["خدمات رفاهی", "موارد ایمنی"],
  ["سرویس بهداشتی", "ظرفیت"],
  ["حمام", "سرویس ایرانی", "سرویس فرنگی"],
  ["اتاق خواب", "تخت دو نفره", "تخت یک نفره"],
  ["توضیحات"],
];
export const adminAddMovieListItemsMulti = [
  "Artist",
  "Genre",
  "Language",
  "Country",
];

export const adminAddOthersListItems = [["Title"]];
export const adminAddArtistListItems = [
  ["Name", "DateBirth"],
  ["Career"],
  ["Summary"],
];
