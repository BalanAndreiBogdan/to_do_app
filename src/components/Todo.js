import React from "react"

const Todo = (props) => {

    const deleteHandler = () => {
        props.setTodos(props.todos.filter(el => {
            return (el.id !== props.todo.id)
        }))
    }

    return(
        <div className="todo">
            <li className={'todo-item ${props.todo.completed ? "completed" : ""}'}>{props.text}</li>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo