import React from 'react';
import { data } from '../data';
import { NavBar } from "./Navbar";
import { Link } from 'react-router-dom';


function Tasks(){
   return(
       <>
       <NavBar />
       <section className="task-area">
         <div className="about-app">
            <div className='about-info'>
              <h1>CRYPTOFLUENCING</h1>
              <p>An app that allows influencers to benefit from cryptocurrency inclusion.
                Get your gigs on the cryptofluencing app, complete your task, and sumit to earn tokens.
                </p>
           </div>

          
           <div className='about-img'></div>
         </div>
         
          <div className='instructions'>
          <div className='instructions-title'> <h1>HOW TO EARN</h1></div> 
           <div className='steps'>
            <h2> To start Earning Tokens, Follow the follow the steps: </h2>
             <ol>
               <li>Make Sure your wallet isis up and running</li>
               <li>Choose a bounty to slive based on your niche</li>
               <li>After picking bounty, do the task required by bounty</li>
               <li>After the task, Click on Submit </li>
               <li>Fill your submission form and mint the screenshot of your task solution</li>
             </ol>
           </div>
           </div>
          <h1 className="activeTask">Active Bouties</h1>
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