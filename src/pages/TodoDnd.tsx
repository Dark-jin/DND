import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import TodoList from '../components/TodoList';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Item } from '../models/Item';
import { v1 as uuid } from 'uuid';
import InputField from '../components/InputField';

const TodoDnd: React.FC = () => {
   const [item, setItem] = useState<string>('');
   const [items, setItems] = useLocalStorage<Item[]>('todos', []);
   const [inProgressTodos, setInProgressTodos] = useLocalStorage<Item[]>('inprogress', []);
   const [completedTodos, setCompletedTodos] = useLocalStorage<Item[]>('completed', []);
   const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      if (item) {
         setItems([...items, { id: uuid(), item, isDone: false }]);
         setItem('');
      }
   };
   const onDragEnd = (result: DropResult) => {
      const { source, destination } = result;
      if (!destination) return;
      if (source.droppableId === destination.droppableId && source.index === destination.index) return;
      let add: Item;
      let inbox = items;
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

      setItems(inbox);
      setInProgressTodos(inprogress);
      setCompletedTodos(completed);
   };

   return (
      <>
         <DragDropContext onDragEnd={onDragEnd}>
            <div>
               <InputField item={item} setItem={setItem} handleAdd={handleAdd} />
               <TodoList
                  items={items}
                  setItems={setItems}
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
