import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

import moment from "moment";

test("generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "setStartDate",
    startDate: moment(0),
  });
});

test("generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "setEndDate",
    endDate: moment(0),
  });
});

test("sort by Amount", () => {
  expect(sortByAmount()).toEqual({ type: "sortByAmount" });
});

test("sort by Date", () => {
  expect(sortByDate()).toEqual({ type: "sortByDate" });
});

test("generate set Text filter with value", () => {
  const action = setTextFilter("test");
  expect(action).toEqual({
    type: "setTextFilter",
    text: "test",
  });
});

test("generate set Text filter with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "setTextFilter",
    text: "",
  });
});
