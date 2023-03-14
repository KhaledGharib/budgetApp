import moment from "moment";

export default [
  {
    id: 1,
    description: "Gum",
    note: "",
    amount: 1.5,
    createdAt: 0,
  },
  {
    id: 2,
    description: "rent",
    note: "At the time",
    amount: 750,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: 3,
    description: "Gym",
    note: "",
    amount: 800,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
