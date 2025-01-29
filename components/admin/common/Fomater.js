export const dateFormat = (dateTime) => {
  const today = new Date(dateTime);
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const getDate = `${day}-${month < 10 ? `0${month}` : month}-${year}`;

  return getDate;
};
export const dateFormatDSC = (dateTime) => {
  const today = new Date(dateTime);
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const day = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
  const getDate = `${year}-${month < 10 ? `0${month}` : month}-${day}`;

  return getDate;
};

export const trackStatus = (status) => {
  switch (status) {
    case "shipped":
      return "bg-primary";
    case "delivered":
      return "bg-success";
    case "cancelled":
      return "bg-danger";
    case "pending":
      return "bg-warning";
    default:
      return "bg-info";
  }
};
