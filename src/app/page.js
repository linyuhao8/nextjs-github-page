"use client";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Add a new Todo item
  const addTodo = () => {
    // Check if the todo is not an empty string after trimming whitespace
    if (todo.trim()) {
      // Update the Todo list by adding the new todo to the existing list
      setTodos([...todos, todo]);
      // Clear the input field
      setTodo("");
    }
  };

  // Delete a Todo item by its index
  const deleteTodo = (index) => {
    // Use filter to create a new array excluding the Todo item at the given index
    const newTodos = todos.filter((_, i) => i !== index);
    // Update the Todo list with the new array after deletion
    setTodos(newTodos);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Todo List</h1>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="border p-2 mb-2"
        placeholder="Add a new todo"
      />
      <button
        onClick={addTodo}
        className="bg-blue-500 text-white p-2 ml-2 rounded"
      >
        Add Todo
      </button>

      <ul className="mt-4">
        {todos.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>{item}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
