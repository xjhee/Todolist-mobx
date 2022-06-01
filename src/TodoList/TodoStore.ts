import { action, computed, makeObservable, observable} from "mobx";

interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export class TodoStoreImpl {
    todos: TodoItem[] = [];
 
    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            toggleTodo: action,
            status: computed
        });
    }

    // method to add todo to list
    addTodo(title: string) {
        const item: TodoItem = {
            id: +Math.random().toFixed(4),
            title, 
            completed: false
        };
        this.todos.push(item);
    }

    // method to check and uncheck a todo item
    toggleTodo(id: number) {
        const index = this.todos.findIndex(item => item.id === id);
        if (index > -1) {
            this.todos[index].completed = !this.todos[index].completed;
        }
    }

    // a get method to return an object telling us how many TODOs remaining
    get status() {
        let completed = 0, remaining = 0;
        this.todos.forEach(todo => {
            if (todo.completed) {
                completed ++;
            }
            else {
                remaining ++;
            }
        })
        return {completed, remaining}
    }
}

// singleton TodoStore within the whole app, only one store is created
export const TodoStore = new TodoStoreImpl();