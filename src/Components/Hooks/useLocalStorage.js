import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    // * lazy initialize state nghĩa là function ở trong useState( () => {}) thì chỉ execute 1 lần khi khởi tạo thôi
    const [storedValue, setStoredValue] = useState(() => {
        // * Bởi vì localStorage tính toán rất nhiều, nên ta sử dụng kỹ thuật lazy initialize state để component rerender không chạy nữa, chỉ chạy lần đầu tiên thôi.
      if (typeof window === "undefined") {
        return initialValue;
      }
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    });
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value) => {
      try {
        // Allow value to be a function so we have same API as useState
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        // Save state
        setStoredValue(valueToStore);
        // Save to local storage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        // A more advanced implementation would handle the error case
        console.log(error);
      }
    };
    return {storedValue, setValue};
  }