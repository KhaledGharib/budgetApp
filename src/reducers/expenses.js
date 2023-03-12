const expensesDefaultState = [];

export default (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "addExpense":
      return [...state, action.expense];
    case "removeExpense":
      return state.filter(({ id }) => id !== action.id);
    case "editExpense":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};
