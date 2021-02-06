// import React, { useState, useEffect } from "react";
// // import { Button } from "reactstrap";
// import "./Plan.css";

// // components
// import TaskForm from "./TaskForm";
// import PlanDetailsForm from "./PlanDetailsForm";
// import TaskList from "./TaskList";

// const PlanContainer = () => {
//   // state
//   const [inputText, setInputText] = useState("");
//   const [tasks, setTasks] = useState([]);

//   // effects

//   // (only run once)
//   useEffect(() => {
//     getLocalTasks();
//   }, []);
//   // when we get a new task, update
//   useEffect(() => {
//     saveLocalTasks();
//   }, [tasks]);

//   // save to local storage
//   const saveLocalTasks = () => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };
//   const getLocalTasks = () => {
//     if (localStorage.getItem("tasks") === null) {
//       localStorage.setItem("tasks", JSON.stringify([]));
//     } else {
//       let localTask = JSON.parse(localStorage.getItem("tasks"));
//       setTasks(localTask);
//     }
//   };
//   // i want to add the tasks array to my plan object...

//   return (
//     <>
//       <div className="App">
//         <PlanDetailsForm />
//         <TaskForm
//           tasks={tasks}
//           setTasks={setTasks}
//           setInputText={setInputText}
//           inputText={inputText}
//         />
//         <TaskList tasks={tasks} setTasks={setTasks} />
//         {/* <Button type="submit">Save</Button> */}
//       </div>
//     </>
//   );
// };
// export default PlanContainer;
