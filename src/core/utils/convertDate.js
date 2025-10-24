import jalaali from "jalaali-js";
import { e2p } from "./replaceNumber";

const convertDateToPersian = (nowData, withOut = false) => {
  if (!nowData) return "";

  const date = new Date(nowData);
  if (isNaN(date)) return "";

  const weekdays = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
    "شنبه",
  ];
  // گرفتن نام ماه
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  // تبدیل به شمسی
  const jDate = jalaali.toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );
  const dayOfWeek = weekdays[date.getDay()];
  const year = e2p(jDate.jy);
  const month = months[jDate.jm - 1];
  const day = e2p(jDate.jd);

  if (withOut) {
    return { day, month, year };
  } else {
    return `${dayOfWeek} ${day} ${month} ${year}`;
  }
};

const convertDateEnToDateFa = (nowData) => {
  const date = new Date(nowData);
  // console.log(date);

  // تبدیل میلادی به شمسی
  const { jy, jm, jd } = jalaali.toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );

  // قالب‌بندی به شکل ۱۴۰۴/۰۷/۲۸
  const formatted = `${e2p(jy)}/${e2p(jm.toString().padStart(2, "0"))}/${e2p(
    jd.toString().padStart(2, "0")
  )}`;
  return formatted;
};

function convertDateEnToEn(inputDate) {
  const date = new Date(inputDate);

  if (isNaN(date)) {
    throw new Error("Invalid date input");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export { convertDateToPersian, convertDateEnToDateFa, convertDateEnToEn };
