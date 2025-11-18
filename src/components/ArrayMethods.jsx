import React from 'react'

const ArrayMethods = () => {
    const programmers = ["Reed", "John", "Jane"];
    const numbers = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="">
                <h2>.map</h2>
                <ul>
                    {programmers.map((programmer, index) => (
                        <li>{index + 1}. {programmer}</li>
                    ))}
                </ul>
            </div>
            <div className="">
                <h2>.filter</h2>
                <ul>
                    {programmers
                        .filter((programmer) => (programmer.startsWith("J")))
                        .map((programmer, index) => (
                            <li>{index + 1}. {programmer}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="">
                <h2>.reduce</h2>
                <ul>
                    {numbers.reduce((acc, number) => {
                        return acc + number
                    }, 0)}
                </ul>
            </div>
        </>
    )
}

export default ArrayMethods

/*
  This component demonstrates how to use JavaScript array methods inside React.
  The .map() method iterates through the programmers array and renders each item as a list element.
  The .filter() method creates a new array containing only names starting with "J".
  The .reduce() method adds all numbers in the array together and displays the final total.
*/

