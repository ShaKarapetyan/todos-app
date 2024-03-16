import './App.css';

function TodoItem ({todo, onChange, onDelete}) {
    return (
        <div className="item">
            <label className='itemLabel'>
                <input className='itemBox' type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }}/>
                <p className='todoText'>{todo.text}</p>
                <button className='itemBtn' onClick={() => {
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
    )    
}

export default TodoItem;