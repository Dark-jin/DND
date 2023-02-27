import React from 'react';

interface Props {
   item: string;
   setItem: React.Dispatch<React.SetStateAction<string>>;
   handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<Props> = ({ item, setItem, handleAdd }) => {
   return (
      <div>
         <form onSubmit={handleAdd}>
            <input type="text" placeholder="Add Item" value={item} onChange={e => setItem(e.target.value)}></input>
            <button>추가</button>
         </form>
      </div>
   );
};
export default InputField;
