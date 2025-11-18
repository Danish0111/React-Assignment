import React, { useState } from 'react'

const SpreadOperator = () => {
    const [user, setUser] = useState([
        { name: "Reed", age: 28 },
    ]);
    const addUser = (name, age) => {
        const newUser = { name, age };
        setUser([...user, newUser]);
    }
    return (
        <div>
            <button onClick={() => addUser("Alice", 30)}>Add User</button>
            {user.map((user, index) => (
                <div key={index}>
                    <p>{user.name} - {user.age}</p>
                </div>
            ))}
        </div>
    )
}

export default SpreadOperator

/*
  This component uses the spread operator to add new user objects into an existing array.
  The user list is stored in React state so the UI re-renders when the array updates.
  The addUser function creates a new user and update the state using setUser([...user, newUser]).
  when the button is clicked it calles the addUser function and the updated list is rendered using .map().
*/

