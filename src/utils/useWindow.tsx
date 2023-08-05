import React, { useEffect, useState } from 'react';

const useWindow = () => {
  interface ISize {
    width: number;
    height: number;
  }
  const [windowSize, setWindow] = useState<ISize>({ width: 0, height: 0 });

  const checkSize = () => {
    setWindow({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return [windowSize];
};

export default useWindow;
