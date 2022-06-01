import React, { useState } from 'react';
import { TodoStoreImpl } from "./TodoStore"
import { observer } from 'mobx-react'
interface TodoListProps {
    todoStore: TodoStoreImpl
}

// need to make TodoList observable in order to capture any changes in TodoStore
// otherwise TodoStore is always the same instance, it's the property inside todoStore that changes
export const TodoList: React.FC<TodoListProps> = observer(({todoStore}) => {

    const [value, setValue] = useState('');
    const status = todoStore.status;

    return (
    <div> 
        <input 
            value={value}
            onChange={(event) => { setValue(event.target.value);}}
            type="text" />

        <button onClick={() => {
            if (value) {
                todoStore.addTodo(value);
                setValue('');
            }
        }}>
            submit
        </button>

        Completed: {status.completed}
        <br />
        Remaining: {status.remaining}

        <ul>
            {todoStore.todos.map(todo => {
                return <li onClick={() => {
                    todoStore.toggleTodo(todo.id);
                }}> [{todo.completed ? 'x' : ' '}] {todo.title}</li>
            })}
        </ul>
    </div>
    ) 
});

