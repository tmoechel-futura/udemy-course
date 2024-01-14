import React from "react";

// link for state changes: https://state-updates.vercel.app/

export function App(props) {
  var numbers = [1, 2, 3];
  var numers_c = [23, ...numbers, 45];
  // insert a 7 after the 2
  var numbers_inserted = [...numbers.slice(0, 2), 7, ...numbers.slice(2)];
  // remove 7 again, filter returns new array so no spread required
  var numbers_deleted = numbers_inserted.filter((element, i) => {
    return element !== 7;
  });

  console.log(numers_c);
  console.log(numbers_inserted);
  console.log(numbers_deleted);

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// Log to console
console.log("Hello console");
