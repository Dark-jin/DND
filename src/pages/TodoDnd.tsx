import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TodoList from '../components/TodoList';
import { Todo } from '../models/todo';

const TodoDnd: React.FC = () => {
   const [todos, setTodos] = useState<Todo[]>([]);
   const [completed, setCompleted] = useState<Todo[]>([]);

   return (
      <>
         <DragDropContext onDragEnd={onDragEnd}>
            <div>
               <TodoList todos={todos} completed={completed} />
            </div>
         </DragDropContext>
      </>
   );
};
export default TodoDnd;
