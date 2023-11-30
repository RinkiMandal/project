import React, { useState } from 'react';

const AddTaskForm = ({ handleAddTask }) => {
  const [task, setTask] = useState({ name: '', description: '', priority: 'low' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(task);
    setTask({ name: '', description: '', priority: 'low' });
  };

  return (
    <div className="my-4 bg-slate-800 h-screen font-serif">

    <form onSubmit={handleSubmit} className="space-y-4 flex items-center justify-between flex-col">
    <h2 className="text-2xl text-center font-bold mt-6 text-white font-serif">Add Task</h2>
    <div className=''>
    <label className="block text-lg font-medium text-orange-700">
            Task Name </label>
    <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        className="mt-1 p-2 border rounded w-64"
        required />
    </div>

    <div>
    <label className="block text-sm font-medium text-orange-700">
            Task Description </label>
    <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        className="mt-1 p-2 border rounded w-64 "  />
    </div>

    <div>
    <label className="block text-sm font-medium text-orange-700">
            Priority </label>
    <select
         name="priority"
        value={task.priority}
        onChange={handleChange}
        className="mt-1 p-2 border rounded w-64 cursor-pointer" >
     <option value="low">Low</option>
     <option value="medium">Medium</option>
     <option value="high">High</option>
    </select>
    </div>

    <button type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" >
                Add Task </button>
                
      </form>
    </div>
  );
};

export default AddTaskForm;