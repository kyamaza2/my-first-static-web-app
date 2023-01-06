import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <>
      <div>{data}</div>
      <a href="/.auth/login/aad">Login</a>
    </>
  );
  // const value = 'World';
  // return <div>Hello {value}</div>;
}

export default App;
