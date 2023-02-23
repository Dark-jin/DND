import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../models/todo';
import TodoItem from './TodoItem';

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
            <Droppable droppableId="inbox-colum">
               {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                     <ul>
                        {todos.map((todo, index) => (
                           <TodoItem index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                        ))}
                        {provided.placeholder}
                     </ul>
                  </div>
               )}
            </Droppable>
         </div>
         <div>
            <h2>MenuList 2</h2>
            <Droppable droppableId="inbox-colum">
               {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                     <ul>
                        {todos.map((todo, index) => (
                           <TodoItem index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                        ))}
                        {provided.placeholder}
                     </ul>
                  </div>
               )}
            </Droppable>
         </div>
         <div>
            <h2>MenuList 3</h2>
            <Droppable droppableId="inbox-colum">
               {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                     <ul>
                        {todos.map((todo, index) => (
                           <TodoItem index={index} todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
                        ))}
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
