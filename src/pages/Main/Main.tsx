import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
   const navigate = useNavigate();
   const dragbutton = () => {
      navigate('/DragTest');
   };
   const adddndbutton = () => {
      navigate('/AddDnd');
   };
   const todobutton = () => {
      navigate('/TodoDnd');
   };
   const menubutton = () => {
      navigate('/Menu');
   };
   const imagebutton = () => {
      navigate('/ImageUpload');
   };
   return (
      <>
         <h1>Hello World!</h1>
         <Button onClick={dragbutton}>드래그 테스트</Button>
         <Button onClick={adddndbutton}>추가 드래그 테스트</Button>
         <Button onClick={todobutton}>ToDoDND</Button>
         <Button onClick={menubutton}>메뉴판</Button>
         <Button onClick={imagebutton}>이미지 업로드</Button>
      </>
   );
};
export default Main;
