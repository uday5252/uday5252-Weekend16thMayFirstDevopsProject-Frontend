import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

 useEffect(() => {
  fetch('http://a84f04537361a44d6b3b4d69fdc1e12d-1184505678.ap-south-1.elb.amazonaws.com/api/message')
    .then(res => res.json())
    .then(data => setMessage(data.message))
    .catch(err => console.log(err));
}, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>React Frontend</h1>

      <h2>Message from Backend:</h2>

      <p>{message}</p>
    </div>
  );
}

export default App;
