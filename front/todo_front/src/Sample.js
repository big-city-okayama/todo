import React from 'react';

const foo = "foo";
const bar = "bar";
const myStyle = {
  fontSize: "20pt",
  color: "blue"
};

function Sample() {
    return (
        <div style={myStyle}>
            <h1>{foo}</h1>
            <h2>{bar}</h2>
        </div>
    );
}

export default Sample;
