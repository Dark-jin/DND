import React from 'react';
import Menudnd from './Menudnd';

interface MenuBoardData {
   title: string;
   items: MenuItem[];
}
interface MenuItem {
   id: string;
   name: string;
}

const Menu = () => {
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
   return (
      <div>
         {menuBoards.map(({ title, items }) => (
            <Menudnd key={title} title={title} items={items} />
         ))}
      </div>
   );
};
export default Menu;
