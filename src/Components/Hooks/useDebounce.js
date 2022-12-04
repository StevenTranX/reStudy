import { useEffect, useState } from 'react';

export default function useDebounce(initialValue, delay) {
  const [debounce, setDebounce] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(initialValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialValue]);

  return debounce;
}
