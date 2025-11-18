// default function
export function MyFunction() {
  return <div>This is my default function</div>
}

// arrow function
export const ArrowFunction = (props) => {
  return (
    <h1>{props.content}</h1>
  )
}

// Shorthand arrow function
export const ShortArrowFunction = (props) => <p>{props.content}</p>


/*
  This file demonstrates three different ways to create React components:
  a normal function component, an arrow function component, and a shorthand arrow function.
  Each component receives props and returns JSX, which React renders to the UI.
  The shorthand arrow function is the shortest form, used when the component returns a single line of JSX.
*/
