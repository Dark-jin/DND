import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import TodoList from '../components/TodoList';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Todo } from '../models/todo';
import { v1 as uuid } from 'uuid';
import InputField from '../components/InputField';

const TodoDnd: React.FC = () => {
   const [todo, setTodo] = useState<string>('');
   const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
   const [inProgressTodos, setInProgressTodos] = useLocalStorage<Todo[]>('inprogress', []);
   const [completedTodos, setCompletedTodos] = useLocalStorage<Todo[]>('completed', []);
   const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      if (todo) {
         setTodos([...todos, { id: uuid(), todo, isDone: false }]);
         setTodo('');
      }
   };
   const onDragEnd = (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) return;
      if (source.droppableId === destination.droppableId && source.index === destination.index) return;
      let add: Todo;
      let inbox = todos;
      let inprogress = inProgressTodos;
      let completed = completedTodos;

      if (source.droppableId === 'inbox-column') {
         add = inbox[source.index];
         inbox.splice(source.index, 1);
      } else if (source.droppableId === 'inprogress-column') {
         add = inprogress[source.index];
         inprogress.splice(source.index, 1);
      } else {
         add = completed[source.index];
         completed.splice(source.index, 1);
      }

      if (destination.droppableId === 'inbox-column') {
         inbox.splice(destination.index, 0, { ...add, isDone: false });
      } else if (destination.droppableId === 'inprogress-column') {
         inprogress.splice(destination.index, 0, { ...add, isDone: false });
      } else {
         completed.splice(destination.index, 0, { ...add, isDone: true });
      }

      setTodos(inbox);
      setInProgressTodos(inprogress);
      setCompletedTodos(completed);
   };

   return (
      <>
         <DragDropContext onDragEnd={onDragEnd}>
            <div>
               <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
               <TodoList
                  todos={todos}
                  setTodos={setTodos}
                  inProgressTodos={inProgressTodos}
                  setInProgressTodos={setInProgressTodos}
                  completedTodos={completedTodos}
                  setCompletedTodos={setCompletedTodos}
               />
            </div>
         </DragDropContext>
      </>
   );
};
export default TodoDnd;
