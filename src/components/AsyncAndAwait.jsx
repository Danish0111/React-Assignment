import { useState } from 'react'

const AsyncAndAwait = () => {
    const [data, setData] = useState();
    const fetchdata =  async () => {
        try {
            const response = await fetch('https://fakeapi.in/api/users');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
  return (
    <div>
      {data ? (
        <div>
          <h2>Users</h2>
          <p>{data.text}</p>
        </div>
      ) : (
        <button onClick={fetchdata}>fetch User</button>
      )}
    </div>
  )
}

export default AsyncAndAwait

/*
  This component demonstrates how to fetch API data using async/await in React.
  When the button is clicked, the fetchData function is called, which waits for the API response and converts it into JSON.
  The received data is stored in React state using setData.
  If data exists, it is displayed on the screen; otherwise, a button is shown to start the fetch request.
*/

