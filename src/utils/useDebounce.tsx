import React, { useEffect } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debounce, setDebounce] = React.useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debounce];
};

export default useDebounce;
