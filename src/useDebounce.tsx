import { useState, useEffect } from 'react';
export const useDebounce = (value: string, delay: number) => {
  const [searchDebounced, setSearchDebounced] = useState<string>(``);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchDebounced(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return { searchDebounced, setSearchDebounced };
};
export default useDebounce;
