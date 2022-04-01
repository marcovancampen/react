import React, { useState } from "react";
import "./App.css";
import Todo from "./components/todo/Todo.jsx";
import TodoForm from "./components/todoform/TodoForm.jsx";
import Heading from "./components/headin/heading";

function App() {
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !Todo.isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div></div>

      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
