import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');
  const [logindata, setLogindata] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { clientPrincipal } = await( await fetch(`/.auth/me`)).json();
      setLogindata(clientPrincipal);
    })();
  }, []);

  return (
    <>
      <div>{data}</div>
      {logindata
        ? <p>ログイン成功</p>
        : <p>ログインしてください</p>}
      <p><a href="/.auth/login/aad">Login</a></p>
      <p><a href="/.auth/logout/">Logout</a></p>
    </>
  );
}

export default App;
