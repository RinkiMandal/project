import React from "react";

const TaskList = ({ tasks, handleComplete, handleDelete }) => {
  return (
    <div className="my-4 h-screen text-white font-serif ">
    <h2 className="text-2xl mb-6 text-center font-bold mt-8 text-white font-serif">Task List</h2>

    <ul className="text-lg">
    {tasks.map((task) => (
    <li key={task.id} className="flex items-center justify-between shadow-xl mb-3 text-center">
    <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>
    {task.name}</span>
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => handleComplete(task.id)}
      className="mx-2" />
      <button
        onClick={() => handleDelete(task.id)}
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
        > Delete </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default TaskList;
