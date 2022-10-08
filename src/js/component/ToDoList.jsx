import React, { useEffect, useState } from "react";

export function ToDoList() {
  const [list, setList] = useState([]);
  const [render, rerender] = useState(true);


  function handleKeyPress(e) {
    var key = e.key;
    if (key == "Enter") {
      let tempList = list;
      tempList.push(e.target.value);
      setList(tempList);
      console.log(list);
      rerender(!render);
    } 
  }

  function removeHandler(x) {
    let tempList = list
    tempList.splice(x,1);
    console.log(tempList)
    setList(tempList)
    rerender(!render);
  }

  return (
    <div className="container">
      <h1><em>ToDos</em></h1>
      <input
        type="text"
        onKeyPress={handleKeyPress}
        placeholder="What needs to be done?"
      />
      <ul className="list">
        {list.map((item, idx) => {
          return (
            <li key={idx}>
              {item}&nbsp;&nbsp;
              <button onClick={()=>removeHandler(idx)}>
                <strong>X</strong>
              </button>
            </li>
          );
        })}
        <hr />
      </ul>
    </div>
  );
}
