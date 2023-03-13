import moment from "moment";

const filtersDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
  // startDate: moment().startOf("month"),
  // endDate: moment().endOf("month"),
};

export default (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "setTextFilter":
      return {
        ...state,
        text: action.text,
      };
    case "sortByAmount":
      return {
        ...state,
        sortBy: "amount",
      };
    case "sortByDate":
      return {
        ...state,
        sortBy: "date",
      };
    case "setStartDate":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "setEndDate":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
