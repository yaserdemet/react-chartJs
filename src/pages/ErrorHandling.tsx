import React, { useEffect, useState } from 'react';

const ErrorHandling = () => {
    const [error, setError] = useState(false)
  useEffect(() => {
    const btn = document.createElement('button');
    btn.innerText = 'Throw New Error!';
    btn.style.position = 'absolue';
    btn.style.top = '12';
    document.body.appendChild(btn);
    btn.addEventListener("click", () => {
        setError(!error)
    })
  }, []);
  return <></>;
};

export default ErrorHandling;
