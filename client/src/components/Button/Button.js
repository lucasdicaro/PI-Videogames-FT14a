import React, { useState } from 'react';

function Button() {
    const [title, setTitle] = useState("Home"); // usage of useState
    // const [varName, setVarName] = useState(initial value);
    // useState -> gives a variable that is particular for that instance of component

    const btnClick = () => {
        //console.log('btn');
        setTitle("New Delete"); // set state to new va
    }

    return (
        <button onClick={btnClick}>{title}</button>
    )
}

export default Button;