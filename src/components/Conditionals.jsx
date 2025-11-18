import React, { useState } from 'react'

const Conditionals = () => {
    const [isMessageOpen, setIsMessageOpen] = useState(false);
  return (
    <>
      {isMessageOpen && <h2>The button has been clicked!</h2>}
      {isMessageOpen ? (
        <button onClick={() => setIsMessageOpen(false)}>Click to Hide Message</button>
      ) : (
        <button onClick={() => setIsMessageOpen(true)}>Click to Show Message</button>
      )}
    </>
  )
}

export default Conditionals

/*
  This component demonstrates conditional rendering using React state.
  The isMessageOpen state determines whether the message should be displayed.
  When the button is clicked, setIsMessageOpen toggles the state between true and false.
*/
