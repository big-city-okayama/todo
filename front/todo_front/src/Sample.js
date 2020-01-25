import React from 'react';
import Beer from './Beer';

const foo = "foo";
const bar = "bar";
const myStyle = {
  fontSize: "20pt",
  color: "blue"
};
const thStyle = { backgroundColor:'black' };
const tdStyle = { backgroundColor:'white' };

const lists = [
    <li>Kinmugi</li>,
    <li>ClearAsahi</li>,
    <li>Barreal</li>
];

const beers = [
    { name: "Kinmugi", maker: "sunt..." },
    { name: "ClearAsahi", maker: "asa..." },
    { name: "Barreal", maker: "topva..." }
];

function Sample() {
    return (
        <div style={myStyle}>
            <h1>{foo}</h1>
            <h2>{bar}</h2>
            <ul>{lists}</ul>
            <table>
                <tr>
                    <th style={thStyle}>ItemName</th>
                    <th style={thStyle}>Maker</th>
                </tr>
                {beers.map(val => (
                    <Beer name={val.name} maker={val.marker}/>
                ))}
            </table>
        </div>
    );
}

export default Sample;
