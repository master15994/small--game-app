import { useState } from "react"
import TodoList from "../TodoList"
import t from './todo.module.css'



const Todo = () => {

    const [todos, setTodos] = useState(
        [
            { id: 1, title: 'First todo', completed: false },
            { id: 2, title: 'Second todo', completed: true },
        ]
    )

    const [todoTitle, setTodoTitle] = useState('')
    const momo = event => {
        if (event.key === "Enter") {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false,
                }
            ])
            setTodoTitle('')
        }
    }

    return (
        <div>
            <div className="container">
                <h1>Todo app</h1>
                <div className="input-field">
                    <input
                        value={todoTitle}
                        onChange={event => setTodoTitle(event.target.value)}
                        onKeyPress={momo}
                        type="text" />
                </div>
                <TodoList todos={todos} />
            </div>
        </div>
    )

}

export default Todo