import React, { Component } from "react";

class Todo extends Component {
    render() {
        return(
            <li>
                <span>{this.props.title}</span>
                <p>{this.props.description}</p>
            </li>
        );
    }
}

export default Todo;
