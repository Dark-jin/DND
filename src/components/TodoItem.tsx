import { useEffect, useRef, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Item } from '../models/Item';
import React from 'react';
import daisyui from 'daisyui';

interface Props {
   index: number;
   item: Item;
   items: Item[];
   inbox: Item[];
   completed: Item[];
   setItems: (s: Item[]) => void;
   setCompleted: (s: Item[]) => void;
}
const TodoItem: React.FC<Props> = ({ index, item, items, setItems, completed, setCompleted }) => {
   const [edit, setEdit] = useState<boolean>(false);
   const [editTodo, setEditTodo] = useState<string>(item.item);

   const textareaRef = useRef<HTMLTextAreaElement>(null);

   useEffect(() => {
      textareaRef.current?.focus();
      if (textareaRef.current) {
         textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
      }
   }, [edit]);

   const handleDone = (id: string) => {
      if (item.isDone) {
         setItems(items.filter(item => item.id !== id));
      } else {
         setItems(items.filter(item => item.id !== id));
         setCompleted([...completed, { ...item, isDone: true }]);
      }
   };
   const handleDelete = (id: string) => {
      setItems(items.filter(item => item.id !== id));
   };
   const handleEdit = (e: React.FormEvent, id: string) => {
      e.preventDefault();
      setItems(items.map(item => (item.id === id ? { ...item, item: editTodo } : item)));
      setEdit(false);
   };
   const handleClickToEdit = () => {
      if (!edit && !item.isDone) {
         setEdit(!edit);
      }
   };

   return (
      <Draggable draggableId={item.id.toString()} index={index}>
         {provided => (
            <li
               className="card card-side bg-base-100 shadow-xl "
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}>
               <form onSubmit={e => handleEdit(e, item.id)}>
                  <span onClick={() => handleDone(item.id)}></span>
                  {edit ? (
                     <textarea
                        ref={textareaRef}
                        onChange={e => {
                           e.target.style.height = e.target.scrollHeight + 'px';
                           setEditTodo(e.target.value);
                        }}
                        onBlur={e => handleEdit(e, item.id)}
                        value={editTodo}></textarea>
                  ) : (
                     <span onClick={handleClickToEdit}>{item.item}</span>
                  )}
                  <div className="card-actions justify-end">
                     <button className="btn btn-primary" type="button" onClick={() => handleDelete(item.id)}>
                        ??????
                     </button>
                  </div>
               </form>
            </li>
         )}
      </Draggable>
   );
};
export default TodoItem;
