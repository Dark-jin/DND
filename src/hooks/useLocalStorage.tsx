import { useState } from 'react';

export const useLocalStorage = <T,>(key: string, initialValue: T): [T, (s: T) => void] => {
   const [storedValue, setStoredValue] = useState<T>(() => {
      try {
         const item = localStorage.getItem(key);
         return item ? JSON.parse(item) : initialValue;
      } catch (error) {
         return initialValue;
      }
   });
   const setValue = (value: T) => {
      try {
         const valueTostore = value instanceof Function ? value(storedValue) : value;
         setStoredValue(valueTostore);
         localStorage.setItem(key, JSON.stringify(valueTostore));
      } catch (error) {
         console.log(error);
      }
   };
   return [storedValue, setValue];
};
