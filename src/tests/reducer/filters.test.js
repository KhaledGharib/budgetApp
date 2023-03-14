import filtersReducer from "../../reducers/filters";

import moment from "moment";

test("filter reducer", () => {
  const action = filtersReducer(undefined, { type: "@@INIT" });
  expect(action).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("sortBy to amount Reducer", () => {
  const state = filtersReducer(undefined, { type: "sortByAmount" });

  expect(state.sortBy).toEqual("amount");
});

test("sortBy to date Reducer", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };

  const action = { type: "sortByDate" };
  const state = filtersReducer(currentState, action);

  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const text = "this is my filter";
  const action = {
    type: "setTextFilter",
    text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("should set startDate filter", () => {
  const startDate = moment();
  const action = {
    type: "setStartDate",
    startDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});
test("should set endDate filter", () => {
  const endDate = moment();
  const action = {
    type: "setEndDate",
    endDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
