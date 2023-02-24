import { Main } from '../pages';
import AddDnd from '../pages/AddDnd';
import Dragtest from '../pages/Dragtest';
import TodoDnd from '../pages/TodoDnd';
import Menu from '../pages/Menu';

const Router = [
   {
      title: 'Home',
      url: '/',
      component: <Main />,
   },
   {
      title: '드래그',
      url: 'DragTest',
      component: <Dragtest />,
   },
   {
      title: '추가 드래그',
      url: 'DragTest',
      component: <AddDnd />,
   },
   {
      title: 'Todo DND',
      url: 'TodoDnd',
      component: <TodoDnd />,
   },
   {
      title: 'Menudnd',
      url: 'Menudnd',
      component: <Menu />,
   },
];
export default Router;
