import React from 'react';
import Beer from './Beer';
import Todos from "./Todos";

// const data = [
//     {
//         id: 1,
//         title: "hoge",
//         description: "fuga"
//     },
//     {
//         id: 2,
//         title: "moge",
//         description: "moga"
//     }
// ];

const foo = "foo";
const bar = "bar";
const myStyle = {
  fontSize: "20pt",
  color: "blue"
};
const thStyle = { backgroundColor:'black' };

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

// function Sample() {
//     return (
//         <div style={myStyle}>
//             <h1>{foo}</h1>
//             <h2>{bar}</h2>
//             <ul>{lists}</ul>
//             <table>
//                 <tr>
//                     <th style={thStyle}>ItemName</th>
//                     <th style={thStyle}>Maker</th>
//                 </tr>
//                 {beers.map(val => (
//                     <Beer name={val.name} maker={val.marker}/>
//                 ))}
//             </table>
//         </div>
//     );
// }
//　↓関数からクラスに変形
class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "First",
            data: [],
            id: 0,
            title: "",
            description: ""
        }
    }

    handleTextChange = event => {
        this.setState({ text: event.target.value });
    };
    handleTitleChange = event => {
        this.setState({ title: event.target.value });
    };
    handleDescriptionChange = event => {
        this.setState({ description: event.target.value });
    };
    handleAddTodo = event => {
        this.state.data.push(
            {
                title: this.state.title,
                description: this.state.description
            }
        )
        this.setState({ data: this.state.data })
    };

    render() {
        return (
            <div style={myStyle}>
                <p>{foo}</p>
                <p>{bar}</p>
                <ul>{lists}</ul>
                <table>
                    <tr>
                        <th style={thStyle}>ItemName</th>
                        <th style={thStyle}>Marker</th>
                    </tr>
                    {beers.map(val => (
                        <Beer name={val.name} marker={val.marker} />
                    ))}
                </table>

                <h1>{this.state.text}</h1>
                <input type="text" onChange={this.handleTextChange}></input>

                <Todos data={this.state.data} />

                <label>Title</label>
                <input type="text" onChange={this.handleTitleChange}></input>
                <label>Description</label>
                <input type="text" onChange={this.handleDescriptionChange}></input>
                <button onClick={this.handleAddTodo}>addTodo</button>
            </div>
        )
    }
}

export default Sample;
