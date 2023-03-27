import "../styles/SideBar.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function SideBar(props) {
  let backendData = props.backendData;
  let toggleState = props.toggleState;
  let setToggleState = props.setToggleState;

  // fetch("/boards",{
  //   method:"put",
  //   headers:{
  //     'Accept':'application/json',
  //     'Content-Type':'application/json',
  //   },
  //   body:JSON.stringify(backendData)
  // })
  //     .then((response) => response.json())
  //     .then((data) => {
  //         console.log(data.boards);
  //     });

  function toggleActive(i) {
    setToggleState(i);
  }

  function toggleActiveStyle(i) {
    if (i === toggleState) {
      return "dropDownBoard active";
    } else {
      return "dropDownBoard";
    }
  }

  return (
    <div className="sideBar">
      <h3>ALL BOARDS</h3>
      <div className="dropDownBoards">
        {typeof backendData === "undefined" ? (
          <p>Loading...</p>
        ) : (
          backendData.map((board, i) => {
            
            return (

              <Link to={`/${board.name}`}>
               <div
                key={board.name}
                className={toggleActiveStyle(board.name)}
                onClick={() => {
                  toggleActive(board.name);
                }}
              >
                {board.name}
              </div>
            </Link>
             
            );

            
          })
        )}
      </div>
    </div>
  );
}
