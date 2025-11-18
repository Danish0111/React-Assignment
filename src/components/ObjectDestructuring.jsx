import React from 'react'

const ObjectDestructuring = () => {
    const user = {
        name: "Reed",
        age: 28,
        isEnglishSpeaker: true,
    };

    const { age, name, isEnglishSpeaker: knowsEnglish } = user; 
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Knows English: {knowsEnglish ? "Yes" : "No"}</p>
        </div>
    )
}

export default ObjectDestructuring

/*
  This component demonstrates object destructuring in JavaScript.
  The user object contains properties like name, age, and isEnglishSpeaker.
  then, we extract these values directly into variables and renamed isEnglishSpeaker to knowsEnglish.
  The extracted values are then displayed in JSX inside the component.
*/
