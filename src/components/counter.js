import React, { useState } from 'react';


function Counter() {
 
  const [count, setCount] = useState(0);

  function changeCount(val){
      setCount(count+val);
  }

  function changeProduct(val){
      setCount(count*val);
  }
  return (
    <div>
      <div className='dislplayCounter'>{count}</div>
      <div className='btnBox'>
      <button onClick={() => changeCount(1)}>
        Increment
      </button>
      <button onClick={() => changeCount(-1)}>
        Decrement
      </button>
      <button onClick={() => changeProduct(2)}>
        Double
      </button>
      </div>
     
    </div>
  );
}
export default Counter;