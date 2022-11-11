import React from 'react';
import {data} from '../data';

function Tasks(){
   return(
       <>
        <section className="task-area">
        <h1 className="activeTask">Active Tasks</h1>
            <div className="task-container">
    {data.map((task) =>{
        
        return(
            
            <div className="ques-wrapper" key={task.id}>
                <p className="Task" >Task: <br></br>{task.question}</p>
                <button className="mintBtn">Mint Answer</button>
            </div>
            
        )
    })
    }
    </div>
    </section>
    </>);
   
}
export {Tasks}