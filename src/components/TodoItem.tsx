import { useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Todo } from '../models/todo';

interface Props {
   index: number;
   todo: Todo;
   todos: Todo[];
   //inbox: Todo[];
   //completed: Todo[];
   setTodos: (s: Todo[]) => void;
   //setInbox: (s: Todo[]) => void;
   //setCompleted: (s: Todo[]) => void;
}
const TodoItem: React.FC<Props> = ({ index, todo, todos, setTodos }) => {
   const [edit, setEdit] = useState<boolean>(false);
   const [editTodo, setEditTodo] = useState<string>(todo.todo);

   const textareaRef = useRef<HTMLTextAreaElement>(null);

   useEffect(() => {
      textareaRef.current?.focus();
      if (textareaRef.current) {
         textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      }
   }, [edit]);

   const handleDone = (id: string) => {
      if (todo.isDone) {
         setTodos(todos.filter(todo => todo.id !== id));
      } else {
         setTodos(todos.filter(todo => todo.id !== id));
      }
   };
   const handleDelete = (id: string) => {
      setTodos(todos.filter(todo => todo.id !== id));
   };
   const handleEdit = (e: React.FormEvent, id: string) => {
      e.preventDefault();
      setTodos(todos.map(todo => (todo.id === id ? { ...todo, todo: editTodo } : todo)));
      setEdit(false);
   };
   const handleClickToEdit = () => {
      if (!edit && !todo.isDone) {
         setEdit(!edit);
      }
   };

   return (
      <Draggable draggableId={todo.id.toString()} index={index}>
         {provided => (
            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
               <form onSubmit={e => handleEdit(e, todo.id)}>
                  <input onChange={() => handleDone(todo.id)} />
                  {edit ? (
                     <textarea
                        ref={textareaRef}
                        onChange={e => {
                           e.target.style.height = e.target.scrollHeight + 'px';
                           setEditTodo(e.target.value);
                        }}
                        value={editTodo}></textarea>
                  ) : (
                     <button type="button" onClick={() => handleDelete(todo.id)}></button>
                  )}
               </form>
            </li>
         )}
      </Draggable>
   );
};
export default TodoItem;
