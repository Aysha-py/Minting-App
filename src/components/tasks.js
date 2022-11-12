import React from 'react';
import { data } from '../data';
import { NavBar } from "../components/navbar";
import { Link } from 'react-router-dom';


function Tasks(){
   return(
       <>
       <NavBar />
        <section className="task-area">
        <h1 className="activeTask">Active Tasks</h1>
            <div className="task-container">
    {data.map((task) =>{
        
        return (
          <div className="ques-wrapper" key={task.id}>
            <p className="Task">
              Task: <br></br>
              {task.question}
            </p>
            <button className="mintBtn">
              <Link to={"./nftlisting"}>Submit Solution</Link>
            </button>
          </div>
        );
    })
    }
    </div>
    </section>
    </>);
   
}
export {Tasks}