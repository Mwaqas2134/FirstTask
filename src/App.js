 
import React, { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeContext } from './context/Themcontext';

import { ADD_TODO, DELETE_TODO } from './actions/actions';

function App() {
  const [input, setInput] = useState(''); // useState for managing input field
  const todos = useSelector(state => state.todos); // useSelector for getting todos from Redux
  const dispatch = useDispatch(); // useDispatch to dispatch actions
  const { theme, toggleTheme } = useContext(ThemeContext); // useContext for theme toggle

  // useEffect to load todos from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      savedTodos.forEach(todo => dispatch(ADD_TODO(todo.text)));
    }
  }, [dispatch]);

  // useEffect to save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch(ADD_TODO(input));
      setInput(''); // Clear the input field
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Todo App</h1>

      <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md shadow-md mr-2" onClick={() => toggleTheme()}>Toggle Theme</button> {/* Theme toggle button */}

      <div className="flex flex-col items-center">
        <input className="p-2 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Add a new task"
        />
        <button className="bg-blue-500 text-white p-2 w-full rounded-md shadow-md mt-2 hover:bg-blue-700" onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul className="mt-10">
        {todos.map(todo => (
          <li className="flex items-center justify-between p-2 my-2 bg-gray-200 dark:bg-gray-700 rounded-md shadow-md" key={todo.id}>
            <span className="text-lg">{todo.text}</span>
            <button className="bg-red-500 text-white p-2 rounded-md shadow-md hover:bg-red-700" onClick={() => dispatch(DELETE_TODO(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
)}
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/contact";
import Footer from "./Footer";
function App() {
  return (
   <nav className="bg-gray-900 text-gray-400 body-font">
    <Navbar></Navbar>
    <About></About>
    <Project></Project>
    <Skills></Skills>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
   
   </nav>

  );
}

export default App
