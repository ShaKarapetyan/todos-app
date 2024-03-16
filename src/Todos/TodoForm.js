import { useState } from "react";
import './App.css';

function TodoForm({onAdd}) {

    const [text, setText] = useState("");
    return(
       <form className="form"  onSubmit={(e) =>  {
            e.preventDefault();
            text == "" ? alert('This field cannot be empty') : onAdd(text);
            setText("");
        }}>
            <input className="inpText" type="text" value={text} onChange={(e) => {
               setText(e.target.value); 
            }}/>
            <button className="btnAdd">Add</button>
        </form>
    )
}

export default TodoForm;