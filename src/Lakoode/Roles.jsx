import React from "react";
import Navbar from "./components/navbar/Navbar";
import Foter from "./pages/Foter";

const Roles = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-16 lg:mx-32 pt-10">
        <p className="text-start text-[19px] font-bold mb-5">
          قوانین و شرایط مجتمع اقامتی لاکوده
        </p>
        <div className="flex flex-col gap-3 pb-16">
          <p className="">
            1. ویلا در ساعت ۱۴ تحویل مهمان میگردد و در ساعت ۱۲ مهمان موظف به
            تخلیه ویلا و تحویل به مسئول مربوطه میباشد. بدیهی است در صورت تاخیر
            به ازای هر ساعت اضافی سکونت توسط مهمان تا ساعت ۱۴ مبلغی معادل ۱۰
            درصد اقامت یک شب دریافت و به ازای هر ساعت به مجموعه اقامتی پرداخت
            میگردد این هزینه حقی جهت سکونت اضافی برای مهمانان ایجاد نمیکند و
            مهمانان در هر حال باید راس ساعت 14 روز پایان قرارداد ویلا را ترک
            کنند عدم تخلیه ساعت ۱۴ به بعد مشمول هزینه ی یک شب اقامت است.
          </p>
          <p>
            2. مهمانان ملزم به رعایت شئونات اسلامی و رعایت حقوق همایگان در محوطه
            ی ویلا میباشند.
          </p>
          <p>
            3. وسایل اضافی که توسط مهمان اخذ میگردد در روز تخلیه باید به مسئول
            مربوطه عودت گردد.
          </p>
          <p>
            4. در صورت نیاز به تمدید و عقد قرارداد جدید مهمان ملزم به اطلاع و
            اخذ قرارداد جدید است.
          </p>
          <p>
            5. مهمان ملزم است در حفظ و نگهداری امکانات و تمیز نگهداشتن آب استخر
            کوشا باشد و هر گونه خسارت وارده به مجموعه مشمول دریافت خسارت نقدی
            است.
          </p>
          <p>
            6. در صورت بروز اختلاف موضوع ابتدا از طریق مذاکره و در صورت عدم وصول
            نتیجه از طریق داور قانونی قابل حل میباشد و رای داور حتمی و لازم
            الاجراست.
          </p>
          <p>
            7. چنانچه پس از شروع قرارداد هر یک از طرفین منصرف شود هزینه اقامت شب
            اول به همراه ۱۰ درصد از اجاره باقی شب ها را باید پرداخت کند.
          </p>
          <p>
        8.    چنانچه میهمان تعهدات خود را در خصوص رعایت نکات اخلاقی و شئونات
            اسلامی انجام ندهد مدیریت مجموعه به اخراج وی بدون پرداخت خسارت اقدام
            خواهد نمود.
          </p>
          <p>
        9.    مسئولیت سلامت و اسیب های وارده به میهمانان بر عهده میهمان سرپرست
            میباشد.
          </p>
        </div>
      </div>
      <Foter/>
    </div>
  );
};

export default Roles;