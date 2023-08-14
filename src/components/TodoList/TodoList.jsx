import React, { useState } from "react"
import t from './TodoList.module.css'

const TodoList = ({ todo, setTodo }) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id) {
        const newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function statusTodo(id) {
        const newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div className={t.main}>
            {
                todo.map(item => (
                    <div key={item.id}>
                        {
                            edit === item.id ?
                                <div>
                                    <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
                                </div>
                                :
                                <div>{item.title}</div>
                        }
                        {
                            edit === item.id ?
                                <div >
                                    <button onClick={() => saveTodo(item.id)}>Сохранить</button>
                                </div> :
                                <div className={t.wrapper}>
                                    <button onClick={() => { deleteTodo(item.id) }}>Удалить</button>
                                    <button onClick={() => { editTodo(item.id, item.title) }}>Редактировать</button>
                                    <button onClick={() => { statusTodo(item.id) }}>Закрыть / Открыть</button>
                                </div>
                        }

                    </div>
                ))
            }
        </div >
    )

}
export default TodoList