import React, { useEffect, useState } from "react";


export function ChangingColorTextField() {
    const [highlight, setHighlight] = useState("2px solid black");
    function handleKeyPress(e) {
        var key = e.key;
        console.log( "You pressed a key: " + key );
        if (key == "enter") {
            setHighlight("2px solid red")
        }
        else if (key == "g") {
            setHighlight("2px solid green")
        }
    }

    return (
        <div>
            <input type="text" onKeyPress={(e) => handleKeyPress(e)} style={{border: highlight}} />
        </div>
    )
}

