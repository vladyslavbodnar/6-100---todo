import { useEffect, useState } from "react";
import Title from "./Title";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, checkTodo }) => {
    const [unCompletedTodos, setUncompletedTodos] = useState(todos.filter((todo) => !todo.checked));
    const [completedTodos, setCompletedTodos] = useState(todos.filter((todo) => todo.checked));

    useEffect(() => {
        setUncompletedTodos(todos.filter((todo) => !todo.checked))
        setCompletedTodos(todos.filter((todo) => todo.checked))
    }, [todos])

    return (
        <div className="todo-list">
            <Title title="Todos" type="h2"/>
            {unCompletedTodos.map((todo) => (<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />))}

            <Title title="Completed Todos" type="h2"/>
            {completedTodos.map((todo) => (<TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />))}
        </div>
    );
};

export default TodoList;
