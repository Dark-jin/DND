import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../models/todo';
import TodoItem from './TodoItem';
import React from 'react';

interface Props {
   todos: Todo[];
   setTodos: (s: Todo[]) => void;
   inProgressTodos: Todo[];
   setInProgressTodos: (s: Todo[]) => void;
   completedTodos: Todo[];
   setCompletedTodos: (s: Todo[]) => void;
}

const TodoList: React.FC<Props> = ({
   todos,
   setTodos,
   inProgressTodos,
   setInProgressTodos,
   completedTodos,
   setCompletedTodos,
}: Props) => {
   return (
      <div>
         <div>
            <h2>MenuList 1</h2>
            <Droppable droppableId="inbox-column">
               {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                     <ul>
                        {todos.length === 0 ? (
                           <p>No Item</p>
                        ) : (
                           todos.map((todo, index) => (
                              <TodoItem
                                 index={index}
                                 todo={todo}
                                 key={todo.id}
                                 todos={todos}
                                 setInbox={setTodos}
                                 inbox={todos}
                                 setTodos={setTodos}
                                 completed={completedTodos}
                                 setCompleted={setCompletedTodos}
                              />
                           ))
                        )}
                        {provided.placeholder}
                     </ul>
                  </div>
               )}
            </Droppable>
         </div>
         <div>
            <h2>MenuList 2</h2>
            <Droppable droppableId="inprogress-column">
               {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                     <ul>
                        {inProgressTodos.length === 0 ? (
                           <p>No Item</p>
                        ) : (
                           inProgressTodos.map((todo, index) => (
                              <TodoItem
                                 index={index}
                                 todo={todo}
                                 key={todo.id}
                                 todos={inProgressTodos}
                                 setInbox={setTodos}
                                 inbox={todos}
                                 setTodos={setInProgressTodos}
                                 completed={completedTodos}
                                 setCompleted={setCompletedTodos}
                              />
                           ))
                        )}
                        {provided.placeholder}
                     </ul>
                  </div>
               )}
            </Droppable>
         </div>
         <div>
            <h2>MenuList 3</h2>
            <Droppable droppableId="completed-column">
               {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                     <ul>
                        {completedTodos.length === 0 ? (
                           <p>No Item</p>
                        ) : (
                           completedTodos.map((todo, index) => (
                              <TodoItem
                                 index={index}
                                 todo={todo}
                                 key={todo.id}
                                 todos={completedTodos}
                                 setInbox={setTodos}
                                 inbox={todos}
                                 setTodos={setCompletedTodos}
                                 completed={completedTodos}
                                 setCompleted={setCompletedTodos}
                              />
                           ))
                        )}
                        {provided.placeholder}
                     </ul>
                  </div>
               )}
            </Droppable>
         </div>
      </div>
   );
};
export default TodoList;
