import React from "react";

const tdStyle = {
    backgroundColor: "white"
};

const Beer = props => {
    return (
        <tr>
            <td style={tdStyle}>{props.name}</td>
            <td style={tdStyle}>{props.maker}</td>
        </tr>
    );
};

export default Beer;
