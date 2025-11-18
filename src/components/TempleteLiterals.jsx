
const sayHello = (text) => {
    return "Hello, " + text + "!"
}

const sayHelloAgain = (text) => {
    return `Hello again, ${text}!`
}
const TempleteLiterals = () => {
    return (
        <>
            <div>
                {sayHello("World")}
            </div>
            <div>
                {sayHelloAgain("World")}
            </div>
        </>
    )
}

export default TempleteLiterals

/*
  This file shows how to use normal string concatenation and template literals in JavaScript.
  The sayHello function use the + operator to combine strings.
  The sayHelloAgain function uses template literals which helps to use variables in between strings.
  Inside the component, both functions are called and their returned strings are displayed in JSX.
*/

