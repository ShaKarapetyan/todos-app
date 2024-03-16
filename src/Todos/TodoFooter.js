import "./App.css";
import TodoSelectAll from "./TodoSelectAll";

function TodoFooter({ todos, onClearCompleted, onSelectAll, onResetAll}) {
  const cmpletedSize = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div className="stylFooter">
      <span className="spnFooter">
        <div className="quantityOne">{cmpletedSize}</div> /
        <div className="quantityTwo">{todos.length}</div>
        <p>Completed</p>
      </span>
      <button className="btnReset" onClick={onResetAll} > Reset all </button>
      <TodoSelectAll onSelectAll={onSelectAll} todos={todos}/>
      <button className="btnFooter" onClick={onClearCompleted}> Clear Completed </button>
    </div>
  );
}

export default TodoFooter;
