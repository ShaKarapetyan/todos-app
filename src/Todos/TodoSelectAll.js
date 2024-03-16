import "./App.css";
import { useState } from "react";

function TodoSelectAll({ onSelectAll, todos}) {
    const [value, setValue] = useState(false);

    if (value === true && todos.length === 0) {
        setValue(false)
    }
 
    return (
        
        <button className="btnSelect" onClick={() => {
            setValue(!value)
            onSelectAll(value)
        }}>
                
            {value ? "Cancel all" : "Select all"}

        </button>
        
    )

}

export default TodoSelectAll;