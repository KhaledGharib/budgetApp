// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIM4Cit8AmyqeyD9UXZkTd1s8a1R_qnGc",
  authDomain: "budgetapp-3ba7c.firebaseapp.com",
  databaseURL: "https://budgetapp-3ba7c-default-rtdb.firebaseio.com",
  projectId: "budgetapp-3ba7c",
  storageBucket: "budgetapp-3ba7c.appspot.com",
  messagingSenderId: "189697626114",
  appId: "1:189697626114:web:9d922942534aebac82571b",
  measurementId: "G-5E9SYZX4NE",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const googleProvider = new GoogleAuthProvider();
// const googleProvider =new
export default db;

// push(ref(db, "expenses"), {
//   description: "Rent",
//   note: "on the time please",
//   amount: 75000,
//   createdAt: 1000,
// });
// push(ref(db, "expenses"), {
//   description: "Gas",
//   note: "on the time please",
//   amount: 5000,
//   createdAt: 1000,
// });
// push(ref(db, "expenses"), {
//   description: "shopping",
//   note: "",
//   amount: 50000,
//   createdAt: 10000,
// });

// onValue(
//   ref(db),
//   (dataSnapshot) => {
//     const expenses = [];
//     console.log(dataSnapshot);
//   },
//   {
//     onlyOnce: true,
//   }
// );

// onValue(
//   ref(db, "expenses"),
//   (dataSnapshot) => {
//     const expenses = [];
//     dataSnapshot.forEach((childSnapShot) => {
//       expenses.push({
//         id: childSnapShot.key,
//         ...childSnapShot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (error) => {
//     console.log("Error: ", error);
//   }
// );

// const notes = [
//   {
//     id: 12,
//     title: "test",
//     body: "tets body",
//   },
//   {
//     id: 13,
//     title: "blablabla",
//     body: "sheeeesh",
//   },
// ];

// set(ref(db, "notes"), notes);

// remove(ref(db, "notes/-NQaV-3CxWSApJ3gibnD"));

// push(ref(db, "notes"), {
//   title: "todo",
//   body: "go to run",
// });
// onValue(
//   ref(db),
//   (dataSnapshot) => {
//     const val = dataSnapshot.val();
//     console.log(`Wllcome back ${val.name}`);
//   },

// );
// set(ref(db), {
//   name: "khaled gharib",
//   age: 21,
//   isEmployed: false,
//   location: {
//     city: "karabuk",
//     state: "karabuk",
//   },
// })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("this is failed", e);
//   });

// remove(ref(db))
//   .then(() => {
//     console.log("data is deleted");
//   })
//   .catch(() => {
//     console.log("Error: ", e);
//   });

// update(ref(db, "/users"), {
//   location: {
//     city: "السعوديه",
//     state: "الرياض",
//   },
// })
//   .than(() => {
//     console.log("data updated");
//   })
//   .cathe((e) => {
//     console.log("Error", e);
//   });
