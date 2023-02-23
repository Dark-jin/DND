import { Button, Input } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

interface Item {
   id: number;
   name: string;
   price: number;
   dropid: string;
}
interface ItemList {
   userItems: Item[];
}

const AddDnd = () => {
   const [name, setName] = useState('');
   const [price, setPrice] = useState(0);
   const arr = ['before'];
   const [userItem, setUserItem] = useState<Item>({
      id: 0,
      name: '',
      price: 0,
      dropid: arr[0],
   });
   const [userList, setUserList] = useState<ItemList>({
      userItems: [userItem],
   });

   const getItemStyle = (isDragging: any, draggableStyle: any) => ({
      userSelect: 'none',
      padding: 10,
      margin: `5 0`,
      border: '1px solid #ccc',
      background: isDragging ? 'lightgreen' : 'red',
      ...draggableStyle,
   });

   const onUserList = useCallback(() => {
      setUserList({
         userItems: [...userList.userItems, userItem],
      });
   }, [userItem]);
   useEffect(() => {
      onUserList();
   }, [onUserList]);
   let [idCnt, setIdCnt] = useState(0);
   const createUser = (name: string, price: number) => {
      if (!name || price < 1) {
         alert('정보를 다시 입력해주세요');
         return;
      }
      setIdCnt((idCnt += 1));
      setUserItem({ id: idCnt, name, price, dropid: 'before' });
   };
   const resultDatas: any = (dropid: string) => {
      return userList?.userItems.map((user, index) => {
         if (user.dropid === dropid && user.name)
            return (
               <Draggable draggableId={user.id.toString()} index={index} key={user.id}>
                  {(provided, snapshot) => (
                     <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                        <span>{user.name}</span>
                        <span>{user.price}</span>
                     </div>
                  )}
               </Draggable>
            );
      });
   };
   const onDragEnd = (result: any) => {
      if (!result.destination) {
         //리스트 밖으로 드랍한 경우
         return;
      }
      const { source, destination } = result;

      let items = [...userList.userItems];
      let index;
      if (source.droppableId !== destination.droppableId) {
         index = items.findIndex(v => v.id === parseInt(result.draggableId));
         let findObj = items[index];
         findObj.dropid = destination.droppableId;
         items.slice(index, 1);
         items = [...items, findObj];
         setUserList({
            userItems: items,
         });
      } else {
         if (source.index !== destination.index) {
            let selectItem = items[result.source.index];
            items.splice(result.source.index, 1);
            items.splice(destination.index, 0, selectItem);
            setUserList({
               userItems: items,
            });
         }
      }
   };
   const getListStyle = (isDraggingOver: any) => ({
      background: isDraggingOver ? 'lightblue' : 'grey',
      padding: 10,
      width: 250,
   });
   return (
      <>
         <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
               <Input onChange={e => setName(e.target.value)} />
               <Input onChange={e => setPrice(parseInt(e.target.value))} />
               <Button onClick={() => createUser(name, price)}>추가하기</Button>
            </div>
         </div>
         <DragDropContext onDragEnd={result => onDragEnd(result)}>
            {arr.map(v => {
               return (
                  <>
                     <Droppable droppableId={v} key={v}>
                        {(provided, snapshot) => (
                           <div
                              {...provided.droppableProps}
                              key={v}
                              ref={provided.innerRef}
                              style={getListStyle(snapshot.isDraggingOver)}
                              className={v}>
                              {resultDatas(v)}
                              {provided.placeholder}
                           </div>
                        )}
                     </Droppable>
                     <div style={{ backgroundColor: 'blue', width: 100 }}></div>
                  </>
               );
            })}
         </DragDropContext>
      </>
   );
};
export default AddDnd;
