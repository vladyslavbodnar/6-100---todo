import { useState } from "react";

const CreateTodo = ({ createTodo }) => {
    const [inputText, setInputText] = useState("");

    const onClick = (e) => {
        e.preventDefault();
        if(inputText) {
            createTodo(inputText);
            setInputText("");
        }
    }

    return (
        <div className="create-todo">
            <form>
                <input className="create-todo__input" type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
                <button className="create-todo__button" onClick={(e) => onClick(e)}>Create todo</button>
            </form>
        </div>
    );
};

export default CreateTodo;
