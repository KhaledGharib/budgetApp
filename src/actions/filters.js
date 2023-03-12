//** Set Text  **

export const setTextFilter = (text = "") => ({
  type: "setTextFilter",
  text,
});

export const sortByAmount = () => ({
  type: "sortByAmount",
});
export const sortByDate = () => ({
  type: "sortByDate",
});

export const setStartDate = (startDate) => ({
  type: "setStartDate",
  startDate,
});

export const setEndDate = (endDate) => ({
  type: "setEndDate",
  endDate,
});
