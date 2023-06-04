import React, { useEffect, useState } from 'react'
import { request } from 'request-dispatch';

const App = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    request.get<any>("http://server.pcrpallet.com/view/api/orders/order/", {
      onResponse(data) {
          console.log('data', data);
          setCount(data.count);
      },
      onError(error) {
          console.log('error', error);
      },
    });
  }, []);

  return (
    <div>
      Hello world!: {count}
    </div>
  );
}

export default App
