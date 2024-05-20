import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoContainer() {
  const addTodo = (title, contents) => {
    const newTodo = {
      id: Date.now(),
      title,
      contents,
      isDone: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  return (
    <div id='todo-container'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
}

export default TodoContainer;
