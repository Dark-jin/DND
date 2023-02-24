import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';

interface MenuItem {
   id: string;
   name: string;
}
interface MenuBoardProps {
   title: string;
   items: MenuItem[];
}
interface MenuBoardData {
   title: string;
   items: MenuItem[];
}

const menuBoards: MenuBoardData[] = [
   {
      title: 'Breakfast',
      items: [
         { id: 'item-1', name: 'Pancakes' },
         { id: 'item-2', name: 'Waffles' },
         { id: 'item-3', name: 'Omelette' },
      ],
   },
   {
      title: 'Lunch',
      items: [
         { id: 'item-4', name: 'Hamburger' },
         { id: 'item-5', name: 'French Fries' },
         { id: 'item-6', name: 'Salad' },
      ],
   },
   {
      title: 'Dinner',
      items: [
         { id: 'item-7', name: 'Steak' },
         { id: 'item-8', name: 'Salmon' },
         { id: 'item-9', name: 'Pasta' },
      ],
   },
];

const Menudnd = ({ title, items }: MenuBoardProps) => {
   const [menuitems, setMenuItems] = useState(items);
   const onDragEnd = (result: DropResult) => {
      if (!result.destination) {
         return;
      }
      const newItems = Array.from(items);
      const [reorderedItems] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, reorderedItems);

      setMenuItems(newItems);
   };
   return (
      <div>
         <h2>{title}</h2>
         <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={title}>
               {provided => (
                  <ul {...provided.droppableProps} ref={provided.innerRef}>
                     {menuitems.map(({ id, name }, index) => (
                        <Draggable key={id} draggableId={id} index={index}>
                           {provided => (
                              <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                 {name}
                              </li>
                           )}
                        </Draggable>
                     ))}
                     {provided.placeholder}
                  </ul>
               )}
            </Droppable>
         </DragDropContext>
      </div>
   );
};
export default Menudnd;
