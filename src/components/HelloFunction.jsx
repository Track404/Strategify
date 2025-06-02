import { useEffect, useState } from 'react';

function HelloFunction() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/.netlify/functions/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message)) // ← Set state here
      .catch((error) => console.error('Error fetching message:', error));
  }, []);

  return <p>Server says: {message}</p>;
}

export default HelloFunction;
