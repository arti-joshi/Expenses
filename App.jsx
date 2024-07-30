// import { useState } from "react";
// import Navbar from "./Components/navbar";

// function App() {
//   const [expense, setExpense] = useState("");
//   const [expenses, setExpenses] = useState([]);
//   const handleEdit = () => {};
//   const handleDelete = () => {

//   };
//   const handleAdd = () => {
//     setExpenses([...expenses, { expense, isCompleted: false }]);
//     setExpense("");
//   };
//   const handleChange = (e) => {
//     setExpense(e.target.value);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div
//         className="container mx-72 my-5 rounded-xl p-5 bg-violet-200 min-h-[100vh]flex items-center justify-center"
//         style={{ width: "37%" }}
//       >
//         <div className="Add expenses my-5">
//           <h1 className="text-xl font-bold">EXPENSES</h1>
//           <input
//             onChange={handleChange}
//             value={expense}
//             type="text"
//             className="w-3/4"
//           />
//           <button
//             onClick={handleAdd}
//             className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6"
//           >
//             Add
//           </button>
//         </div>
//         <h2 className="text-lg font-bold">Your expenses</h2>
//         <div className="expenses">
//           {expenses.map((item) => {
//             return (
//               <div key={expense} className="expense flex w-full my-3 ">
//                 <div className="expense flex">
//                   <div className={item.isCompleted ? "line-through" : ""}>
//                     {item.expense}
//                   </div>
//                   <div className="buttons">
//                     <button
//                       onClick={handleEdit}
//                       className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={handleDelete}
//                       className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
//                     >
//                       delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import { IoTrashBinOutline } from "react-icons/io5";


function App() {
  const colors = [
    "#EE4E4E",
    "#FFDB5C",
    "#A1DD70",
    "#7469B6",
    "#A79277",
    "#03A9F4",
    "#8BC34A",
    "#FF5722",
    "#9C27B0",
  ];

  const [ExpenseList, setExpenseList] = useState([
    { ExpenseName: "Food", color: "#EE4E4E" }, // Light red
    { ExpenseName: "Travel", color: "#FFDB5C" }, // Light green
    { ExpenseName: "Medical", color: "#A1DD70" }, // Light blue
    { ExpenseName: "Housing", color: "#7469B6" }, // Light pink
  ]);
  const [Expense, setExpense] = useState("");
  const [transactionMessage, setTransactionMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (Expense.trim() === "") return;



    const newExpense = {
      ExpenseName: Expense,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
    setExpenseList([...ExpenseList, newExpense]);
    setExpense("");
  };

  const deleteExpense = (deleteValue) => {
    const restExpenseList = [
      ...ExpenseList.filter((val) => {
        return val.ExpenseName !== deleteValue;
      }),
    ];
    setExpenseList(restExpenseList);
  };
  const handleTransaction = () => {
    console.log("Transactions:", ExpenseList);
    setTransactionMessage("Expenses have been stored successfully!");
  };

  return (
    <div
      style={{
        backgroundColor: "#88ab8e",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="w-[500px] mx-auto text-center bg-white p-5 rounded-xl shadow-lg"
        style={{ backgroundColor: '#fff7f1', marginTop: "20px", maxHeight: "80vh", overflowY: "auto" }}
      >
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">Expense List</h1>
        <form onSubmit={handleForm} className="relative mb-6">
          <input
            className="border-2 flex items-center my-7 h-14 pl-7 pr-20 border-gray-300 rounded-full p-4 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-700"
            style={{ width: "100%" }}
            type="text"
            placeholder="Add Category of Expense"
            value={Expense}
            onChange={(e) => setExpense(e.target.value)}
          />
          <button
            type="submit"
            className= "absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#4f6f52] text-white py-2 px-4 rounded-full hover:bg-[#3f5e47] transition duration-300"
            style={{ width: "30%" }}
          >
            Add
          </button>
        </form>
        <div className="Expense-show-area ">
          <ul>
            {ExpenseList.map((singleExpense, index) => {
              return (
                <li
                  key={index}
                  className="bg-black mb-1 flex justify-between text-white py-2 rounded-full text-lg px-3"
                  style={{ backgroundColor: singleExpense.color }}
                >
                  {singleExpense.ExpenseName}{" "}
                  <span
                    onClick={() => deleteExpense(singleExpense.ExpenseName)}
                    className="text-white-600 cursor-pointer"
                  >
                    <IoTrashBinOutline  size={24} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={handleTransaction}
          className="bg-[#4f6f52] text-white py-3 px-8 rounded-full mt-8"
        >
          Store as transaction
        </button>
        {transactionMessage && (
          <p className="mt-4 #4f6f52">{transactionMessage}</p>
        )}
      </div>
    </div>
  );
}

export default App;
