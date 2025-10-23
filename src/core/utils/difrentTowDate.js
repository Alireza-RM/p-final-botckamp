const difrentDate = (dateOne, dateTwo) => {
  const date1 = new Date(dateOne);
  const date2 = new Date(dateTwo);

  const diffTime = Math.abs(date2 - date1);

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const endDate = ` ${diffDays} روز و ${diffDays - 1} شب`;
  return endDate;
};

export {difrentDate}