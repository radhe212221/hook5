import React, { useRef } from 'react';
import './style.css';

export default function App() {
  const ref = useRef();
  const handleclick = () => {
    ref.current.innerHTML -=1
  };
  return (
    <>
      <button onClick={handleclick}>click</button>
      <h1 ref={ref}></h1>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </>
  );
}
