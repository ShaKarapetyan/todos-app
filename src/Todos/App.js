import { useState } from "react";
import "./App.css";
import TodoList from "./TodosList";
import TodoForm from "./TodoForm";
import TodoFooter from "./TodoFooter";

function App() {
  const [todos, setTodos] = useState([
    // {
    //     id:Math.random(),
    //     text: 'Learn JS',
    //     isCompleted: false
    // },
    // {
    //     id: Math.random(),
    //     text: 'Learn React js',
    //     isCompleted: false
    // },
    // {
    //     id: Math.random(),
    //     text: 'Learn Node.js',
    //     isCompleted: false
    // }
  ]);

  return (
    <>
      <div className="title">Todos</div>
      <hr />
      <div className="App">
        <TodoForm
          onAdd={(text) => {
            setTodos([
              ...todos,
              {
                id: Math.random(),
                text: text,
                isCompleted: false,
              },
            ]);
          }}
        />
        <div className="App2">
          <TodoList
            todos={todos}
            onDelete={(todo) => {
              setTodos(todos.filter((t) => t.id !== todo.id));
            }}
            onChange={(newTodo) => {
              setTodos(
                todos.map((todo) => {
                  if (todo.id == newTodo.id) {
                    return newTodo;
                  } else {
                    return todo;
                  }
                })
              );
            }}
          />
        </div>
        <div className="App3">
          <TodoFooter
            todos={todos}
            onResetAll = {() =>  {
              setTodos([])
            }}
            onClearCompleted={() => {
              setTodos(todos.filter((todo) => !todo.isCompleted));
            }}
            onSelectAll={(value) => {
              let newTodos = [...todos];
              newTodos.map((e) => {
                if (value == false) {
                  e.isCompleted = true
                } else if (value == true) {
                  e.isCompleted = false
                }
              })
              setTodos(newTodos)
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
