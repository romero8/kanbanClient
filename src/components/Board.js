import React,{useState} from "react";
import { useParams } from "react-router-dom";
import { SideBar } from "./SideBar";
import { TodoColumn } from "./TodoColumn";
import { DoingColumn } from "./DoingColumn";
import { DoneColumn } from "./DoneColumn";
import { Colunm } from "./Colunm";


export function Board(props) {

  const [toggleState, setToggleState] = useState('Platform Launch');

  const {activeBoard} = useParams()

  

  let backendData = props.backendData
  

  return (
    <div>
   <div className="board">
      <SideBar backendData={backendData} toggleState ={toggleState} setToggleState={setToggleState}/>
      
      <Colunm backendData={backendData} toggleState={toggleState}/>
      {/* <AddColumn/> */}
    </div>
    </div>
  );
}
