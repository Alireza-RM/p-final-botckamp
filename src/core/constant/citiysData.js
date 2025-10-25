const citys = [
  { name: "هیچکدام", id: 0 },
  { name: "تهران", id: 1 },
  { name: "سنندج", id: 2 },
  { name: "مادرید", id: 3 },
  { name: "اصفهان", id: 4 },
  { name: "سلیمانیه", id: 5 },
  { name: "هولر", id: 6 },
  { name: "مازندران", id: 7 },
  { name: "آفرود", id: 8 },
  { name: "ایتالیا", id: 9 },
];

const citysFilterData = (code) => {
  if (!code) return false;
  const filterCity = citys.find((i) => i.id === code);
  return filterCity.name;
};
export { citysFilterData, citys };
