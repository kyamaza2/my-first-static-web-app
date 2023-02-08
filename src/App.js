import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const [logindata, setLogindata] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
    <>
      <div>{data}</div>
      {/* <div>{logindata}</div> */}
      <p><a href="/.auth/login/aad">Login</a></p>
      <p><a href="/.auth/logout/">Logou</a></p>
    </>
  );
}

export default App;
