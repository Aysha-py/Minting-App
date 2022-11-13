import React from "react";
import { data } from "../data";
import { NavBar } from "./Navbar";
import { Link } from "react-router-dom";

function Tasks() {
  return (
    <>
      <NavBar />
      <section className="task-area">
        <div className="about-app">
          <div className="about-img"></div>
          <div className="about-info">
            <h1 className="app-name2">CRYPTOFLUENCING</h1>
            <p>
              This app allows influencers to benefit from cryptocurrency
              inclusion. Get your gigs on the cryptofluencing app, complete your
              task, and sumit to earn tokens.
            </p>
          </div>
        </div>

        <div className="instructions">
          <div className="instructions-title">
            {" "}
            <h2>HOW TO EARN</h2>
          </div>
          <div className="steps">
            <h3> To start Earning Tokens, Follow these steps: </h3>
            <ol>
              <li className="task-requirement">
                Make Sure your wallet is connected to Goerli testnet
              </li>
              <li className="task-requirement">
                Choose a bounty to slove based on your niche
              </li>
              <li className="task-requirement">
                After picking a bounty, do the task required
              </li>
              <li className="task-requirement">
                After the task, Click on Submit{" "}
              </li>
              <li className="task-requirement">
                Fill the submission form and mint the screenshot of your task
                solution
              </li>
            </ol>
          </div>
        </div>
        <h1 className="activeTask">Active Bouties</h1>
        <div className="task-container">
          {data.map((task) => {
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
          })}
        </div>
      </section>
    </>
  );
}
export { Tasks };
