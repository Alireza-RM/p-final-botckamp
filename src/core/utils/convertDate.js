import jalaali from "jalaali-js";
import { e2p } from "./replaceNumber";

const convertDateToPersian = (nowData) => {
  const isoDate = nowData;
  const date = new Date(isoDate);

  // تبدیل به شمسی
  const jDate = jalaali.toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );

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

//   const formatted = `${e2p(jDate.jy)} ${months[jDate.jm - 1]}  ${e2p(
//     jDate.jd
//   )}`;
  const sal = e2p(jDate.jy);
  const mah = months[jDate.jm - 1];
  const roz = e2p(jDate.jd);
  return { roz, mah, sal };
};

export { convertDateToPersian };
