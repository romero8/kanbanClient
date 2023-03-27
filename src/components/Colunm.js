import { TodoColumn } from "./TodoColumn";
import { DoingColumn } from "./DoingColumn";
import { DoneColumn } from "./DoneColumn";
import "../styles/Column.css";

export function Colunm(props) {
  let toggleState = props.toggleState;
  let backendData = props.backendData;

  for (let x = 0; x < backendData.length; x++) {
    if (backendData[x].name === toggleState) {
      return backendData[x].columns.map((column) => (
        <div className="column">
          <p className="nameHeading">{`${column.name}(${column.tasks.length})`}</p>
          <div>
            {column.tasks.map((task) => {
              let findComletedTask = task.subtasks.filter((subtask)=>{
                return subtask.isCompleted === true
              })
              return (
                <div className="task">
                  <p className="taskTitle">{task.title} </p>
                  <p className="subtasksNum">{`${findComletedTask.length} of ${task.subtasks.length} subtasks`}</p>
                </div>
              );
            })}
          </div>
        </div>
      ));
    }
  }
  //   return (
  //     <>
  //       {/* <TodoColumn />
  //       <DoingColumn />
  //       <DoneColumn /> */}

  // <div className="column">
  //         <p className="nameHeading">Done</p>
  //         <div>
  //           <div className="task">
  //             <p className="taskTitle"> blabla</p>
  //             <p className="subtasksNum">blabla</p>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="column">
  //         <p className="nameHeading">Done</p>
  //         <div>
  //           <div className="task">
  //             <p className="taskTitle"> blabla</p>
  //             <p className="subtasksNum">blabla</p>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="column">
  //         <p className="nameHeading">Done</p>
  //         <div>
  //           <div className="task">
  //             <p className="taskTitle"> blabla</p>
  //             <p className="subtasksNum">blabla</p>
  //           </div>
  //         </div>
  //       </div>

  //     </>
  //   );
}
