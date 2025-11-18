import constants from './constants.js';

const Import = () => {
  return (
    <div>
      {constants.name} is {constants.age} years old.
    </div>
  )
}

export default Import

/*
  This component demonstrates how to import values from another file in JavaScript.
  The constants object is imported from 'constants.js'.
  Inside the component we displayed the imported name and age values.
*/
