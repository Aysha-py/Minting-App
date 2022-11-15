import React from "react";
import { data } from "../data";
import { NavBar } from "./Navbar";
import { Link } from "react-router-dom";
import { tiktok } from "../tiktok";
import { twitter } from "../twitter";
import aisha from "../images/avatar-1606914_1280.webp";
import rita from "../images/download.jfif";
import judith from "../images/judith.png";
import influencer from "../images/influencer.webp";

function Tasks() {
  return (
    <>
      <NavBar />
      <section className="task-area">
        <div id="about-app">
          <div className="about-img">
            <img src={influencer} alt="" />
          </div>
          <div className="about-info">
            <h1 className="app-name2">CRYPTOFLUENCING</h1>
            <p>
              This app allows influencers to benefit from cryptocurrency
              inclusion. Get your gigs on the cryptofluencing app, complete your
              task, click on sumit, Mint the screenshot of your solution and
              stand a chance to earn tokens.
            </p>
            <p>
              Like every other thing in this world, the internet too has
              undergone massive changes from time to time
            </p>
            <p>
              A Social Media Influencer is a user on social media who has
              established credibility in a specific industry. These content
              creators have access to a large audience and can share information
              to persuade others through their authenticity and reach. Social
              media influencers often partner with brands, promoting products or
              services to followers in exchange for monetary compensation, free
              products, or discounts.
            </p>
          </div>
        </div>

        <div className="instructions">
          <div className="instructions-title">
            <h2>HOW TO START EARNING ON THE PLARFORM</h2>
          </div>
          <div className="steps">
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
                After the task, Click on Submit
              </li>
              <li className="task-requirement">
                Fill the submission form and mint the screenshot of your task
                solution
              </li>
            </ol>
          </div>
        </div>
        <h1 id="instagram-activeTask">Instagram Active Bounties</h1>
        <div className="task-container">
          {data.map((task) => {
            return (
              <div className="ques-wrapper" key={task.id}>
                <p className="Task">
                  <h3>
                    <u>Task to do</u>
                  </h3>
                  {task.question}
                </p>
                <button className="mintBtn">
                  <Link to={"./mint"}>Submit Solution</Link>
                </button>
              </div>
            );
          })}
        </div>
        <h1 id="tiktok-activeTask">Tiktok Active Bounties</h1>
        <div className="task-container">
          {tiktok.map((task) => {
            return (
              <div className="ques-wrapper" key={task.id}>
                <p className="Task">
                  <h3>
                    <u>Task to do</u>
                  </h3>
                  {task.question}
                </p>
                <button className="mintBtn">
                  <Link to={"./mint"}>Submit Solution</Link>
                </button>
              </div>
            );
          })}
        </div>
        <h1 id="twitter-activeTask">Twitter Active Bounties</h1>
        <div className="task-container">
          {twitter.map((task) => {
            return (
              <div className="ques-wrapper" key={task.id}>
                <p className="Task">
                  <h3>
                    <u>Task to do</u>
                  </h3>
                  {task.question}
                </p>
                <button className="mintBtn">
                  <Link to={"./mint"}>Submit Solution</Link>
                </button>
              </div>
            );
          })}
        </div>
        <div id="Team-members">
          <h1>TEAM MEMBERS</h1>
          <div className="our-team">
            <div className="avatar">
              <img src={aisha} alt="aisha" />
              <p>Aisha Muhammed</p>
            </div>
            <div className="avatar">
              <img src={rita} alt="rita" />
              <p>Rita Onwudiwe</p>
            </div>
            <div className="avatar">
              <img src={judith} alt="judith" />
              <p>Judith Ogar</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { Tasks };
