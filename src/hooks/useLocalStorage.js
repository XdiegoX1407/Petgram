import { useState } from "react";

export const useLocalStorage = (key, initalValue) => {
  const [storagedValue, setStoragedValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initalValue;
    } catch (error) {
      return initalValue;
    }
  });
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoragedValue(value);
    } catch (error) {
      console.error(error);
    }
  };
  return [storagedValue, setLocalStorage];
};
