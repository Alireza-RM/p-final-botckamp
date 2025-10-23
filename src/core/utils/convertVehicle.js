const convertVehicle = (code) => {
  const allVehicle = [
    { nameEn: "Bus", nameFa: "اتوبوس" },
    { nameEn: "Van", nameFa: "ون" },
    { nameEn: "SUV", nameFa: "ماشین" },
    { nameEn: "Airplane", nameFa: "هواپیما" },
  ];

  const filterVehicle = allVehicle.find((i) => i.nameEn === code);
  return filterVehicle.nameFa;
};

export { convertVehicle };
