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

const convertDateEnToDateFa = (nowData) => {
  const date = new Date(nowData);
  console.log(date);

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

export { convertDateToPersian, convertDateEnToDateFa };
