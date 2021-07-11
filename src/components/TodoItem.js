import { useEffect, useState } from "react"

const TodoItem = ({todo, deleteTodo, checkTodo}) => {
    const [inputChecked, setInputChecked] = useState(todo.checked);

    useEffect(() => {
        setInputChecked(todo.checked);
    }, [todo])

    const onChange = (e) => {
        setInputChecked(e.target.checked)
        checkTodo(todo.id);
    }

    return (
        <div className={`todo ${todo.checked && "checked"}`}>
            <input className="todo__checkbox" type="checkbox" checked={inputChecked} onChange={(e) => onChange(e)}/>
            <p className="todo__text">{todo.text}</p>
            <button className="todo__button" onClick={() => deleteTodo(todo.id)}>&#10005;</button>
        </div>
    )
}

export default TodoItem
