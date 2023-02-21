import React from "react";

function BoxColor(props) {

    const { r, g, b } = props
    const color = `rgb(${r}, ${g}, ${b})`
    const divStyle = {
        backgroundColor: color,
        justifyContent: "center",
      };
    return (
        <div className="card" style={divStyle}>
            <p>{color}</p>
        </div>
    )
}

export default BoxColor;