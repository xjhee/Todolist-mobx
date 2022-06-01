import './App.css';
import { Body } from './components/Body.tsx';
import { Header } from './components/Header.tsx';
import { TodoList } from './TodoList/TodoList.tsx';
import { TodoStore } from './TodoList/TodoStore.ts';

function App() {
  return (
    <>
    <Header />
    <TodoList todoStore={TodoStore}/>
    
    </>
  );
}

export default App;
