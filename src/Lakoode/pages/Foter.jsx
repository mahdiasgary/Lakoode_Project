import logoImage from "../assets/logoImage.png";
import logoImageDark from "../assets/logoImageDark.png";
import { FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";
const Foter = () => {
  return (
    <div className=" rounded-t-3xl relative dark:bg-opacity-80 dark:bg-border dark:text-white bg-[#e5e7eb] text-black md:px-16 pt-10 pb-10 mt-10 ">
      <div className="flex flex-col lg:flex-row lg:justify-between ">
        <div className="  flex justify-center md:w-[470px] text-sm leading-5 md:leading-7">
          <div className="px-5 lg:py-0 lg:px-0 " id="about">
            <p className="text-[17px] font-bold mb-2 ">
              درباره مجتمع اقامتی لاکوده
            </p>
            <p className="text-[#6a6c87] dark:text-textPlight text-center md:text-start ">
              اگر قصد سفر دارید و به دنبال تجربه شایسته سفر هستید، یافتن
              اقامتگاهی مناسب از نخستین اقدامات شما باید باشد. جاباما، معتبرترین
              سامانه رزرو هتل و اجاره اقامتگاه، است. در سفرهای داخلی و خارجی،
              جاباما انتخاب‌های متنوعی را در اختیارتان می‌گذارد. اطلاعات درباره
              شرایط هتل یا اقامتگاه، موقعیت مکانی، عکس‌هایی واضح و هزینه اقامت،
              داده‌هایی است که در جاباما در اختیار شما گذاشته می‌شود تا انتخاب
              آگاهانه‌ای داشته باشید. علاوه بر این، پوشش سراسری هتل‌های ایران و
              پوشش گسترده هتل‌های جهان، به شما کمک می‌کند تا با تنوع قابل‌توجهی
              از هتل و اقامتگاه روبه‌رو شوید.
            </p>
          </div>
        </div>
        {/* <div >
        <p className="text-[17px] font-bold ">نحوه رزرو مشتریان</p>
        <div className="pt-3 flex flex-col gap-4 text-center">
          <p> راهنمای رزرو اقامتگاه </p>
          <p>شیوه پرداخت</p>
        </div>
      </div> */}
        <div className="px-8 py-8 lg:py-0 lg:px-0 self-center">
          <p className=" text-[17px] font-bold text-center">
            {" "}
            راه های ارتباطی{" "}
          </p>
          <div className=" faNumber pt-3 flex flex-col gap-2 text-center">
            <p>پاسخگوی 24 ساعته</p>
            <a id="contact" href="tel:09134260356">
              <p>09134260356 تماس</p>
            </a>

            <p>lakoode@gmail.com </p>
          </div>
        </div>

        <div className="px-8 py-8 lg:py-0  text-center lg:px-0 lg:ml-10 self-center ">
          <div className="flex flex-col">
            {/* <img
              className="self-center  "
              src={logoImage}
              alt="img"
       
            /> */}
            <p className="font-bold ">مجتمع اقامتی لاکوده</p>
          </div>
          <div className="mt-3">
            <p>ما رو در شبکه های اجتماعی دنبال کنید.</p>
            <div className="flex justify-center gap-7 mt-3">
              <div className="text-[#6a6c87]">
                <a href="#">
                  <div>
                    <FaLinkedin className="text-[30px] text-[#6a6c87] dark:text-textPlight  duration-200 hover:text-blue-700 dark:hover:text-blue-600 " />
                  </div>
                </a>
              </div>
              <a href="#">
                <div>
                  <FaInstagram className="text-[30px] text-[#6a6c87] dark:text-textPlight  duration-200 hover:text-red-500 dark:hover:text-red-500" />
                </div>
              </a>{" "}
              <a href="#">
                <div>
                  <FaTelegram className="text-[30px] text-[#6a6c87] dark:text-textPlight  duration-200 hover:text-blue-400 dark:hover:text-blue-400" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <div>
        <p>نحوه رزرو مشتریان</p>
        <div>
          <p> راهنمای رزرو اقامتگاه </p>
          <p>شیوه پرداخت</p>
        </div>
      </div> */}
      </div>

      {/* <div
      id="test2"
      className="bg-white rounded-3xl shadow-xl w-72 p-8 flex flex-col justify-center items-center"
    >
      <div className="faNumber">55</div>
    </div>
    <div className="text-xl m-9 grid place-items-center">
      <hr className="p-2 w-96" />
      Copyright-© {new Date().getFullYear()}
    </div> */}
    </div>
  );
};
export default Foter;

