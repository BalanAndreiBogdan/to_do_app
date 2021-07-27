import React from "react"
import Todo from "./Todo"

const TodoList = (props) => {
    console.log(props.todos)
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map(todo =>{
                    return <Todo todo={todo} todos={props.todos} key={todo.id} text={todo.text} setTodos={props.setTodos}/>
                })}
            </ul>
        </div>
    )
}

export default TodoList