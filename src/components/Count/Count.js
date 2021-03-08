import React, { useState } from 'react';

const Count = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // const [name, setName] = useState('');
  // const newName = 'Asmita';

  return (
    <div>
      <p>
        You clicked
        {' '}
        {count}
        {' '}
        times
      </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {/* <p>
        Your name is
        {' '}
        {name}
      </p> */}
    </div>
  );
};

export default Count;
