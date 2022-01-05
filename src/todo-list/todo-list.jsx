import React, { useState } from "react";
import "./todo-list.scss";
import TodoForm from "./todo-form";
import Todo from "./todo";
import Modal from "react-modal";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];

    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    if (newTodos.length !== 0) {
      let i = 1;
      while (i < newTodos.length) {
        if (newTodos[i].text === todo.text) {
          setModalIsOpen(true);
        }
        i++;
      }
    }
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="todo-app">
        <div>
          <h1>What's the task for Today?</h1>
          <TodoForm onSubmit={addTodo} />
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        </div>
      </div>
      <Modal
        className="modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Ooops!</h2>
        <p>It's look like you already add this task...</p>
        <button className="modal-btn" onClick={() => setModalIsOpen(false)}>
          {" "}
          I Know
        </button>
      </Modal>
    </>
  );
};

export default TodoList;
