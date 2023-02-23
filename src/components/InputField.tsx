import React from 'react';

interface Props {
   todo: string;
   setTodo: React.Dispatch<React.SetStateAction<string>>;
   setPriority: React.Dispatch<React.SetStateAction<string>>;
   handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ todo, setTodo, setPriority, handleAdd }) => {
   return (
      <div>
         <form onSubmit={handleAdd}>
            <input type="text" placeholder="Add Item" value={todo} onChange={e => setTodo(e.target.value)}></input>
            <button>추가</button>
         </form>
      </div>
   );
};
export default InputField;
