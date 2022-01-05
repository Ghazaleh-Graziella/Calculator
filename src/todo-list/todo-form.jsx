import React, { useState, useEffect, useRef } from "react";
import "./todo-form.scss";
const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : " ");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput(" ");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              placeholder="Edit a todo item"
              name="text"
              className="todo-input  edit"
              value={input}
              ref={inputRef}
              onChange={handleChange}
            />
            <button className="todo-button" onSubmit={handleSubmit}>
              update
            </button>
          </>
        ) : (
          <>
            {" "}
            <input
              type="text"
              placeholder="Add a todo item"
              name="text"
              className="todo-input  edit"
              value={input}
              ref={inputRef}
              onChange={handleChange}
            />
            <button className="todo-button" onSubmit={handleSubmit}>
              Add todo
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
