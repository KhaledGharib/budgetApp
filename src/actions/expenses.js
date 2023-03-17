import {
  child,
  get,
  onValue,
  push,
  ref,
  remove,
  update,
} from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import db from "../db/firebase";

export const addExpense = (expense) => ({
  type: "addExpense",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    push(ref(db, `users/${uid}/expenses`), expense).then((newRef) => {
      dispatch(
        addExpense({
          id: newRef.key,
          ...expense,
        })
      );
    });
  };
};

// remove expense
export const removeExpense = ({ id } = {}) => ({
  type: "removeExpense",
  id,
});

export const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return remove(ref(db, `user/${uid}/expenses/${id}`)).then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// ** Edit Expense **
export const editExpense = (id, updates) => ({
  type: "editExpense",
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return update(ref(db, `users/${uid}/expenses/${id}`), updates).then(() => {
      dispatch(editExpense({ id, updates }));
    });
  };
};

export const setExpenses = (expenses) => ({
  type: "setExpenses",
  expenses,
});

export const startSetExpenses = (dispatch) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return get(ref(db, `/users/${uid}/expenses`)).then((snapshot) => {
      if (snapshot.exists()) {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      } else {
        console.log("No data available");
      }
    });
  };
};
