import { useEffect } from "react";
import "./PageOne.css";

const PageOne = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".bottom-row .item");

    items.forEach((item) => {
      item.addEventListener("click", () => {
        disableActive();
        item.classList.add("active");
      });
    });

    const disableActive = () => {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
    };
  }, []);
  return (
    <>
      <div className="bg">
        <div className="oval">
          <div className="hands left"></div>
          <div className="hands right"></div>
        </div>
        <div className="shadow"></div>
      </div>

      <div className="page-one-text-container">
        <div className="main-text">
          <h1 className="text">Mustafa Rahman</h1>
          <h2 className="text">
          <span>Full stack web Developer</span>
          </h2>
        </div>

        <span className="intro-text">
        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, Full stack web services and online stores all site and web application developed 100% fresh hand code.
        </span>

        <span className="intro-text">
          
About me
Hello there, I am a Front-end Developer and tech enthusiast person.

I created lots of successful websites that are fast, easy to use, and built with best practices. I used HTML, CSS, and React js and JavaScript and also backend language(Node.js, MongoDB, Express.js) to produce responsive websites and web apps that provide users the best and most appropriate experience suited to their device and browser.

Job Status:
I'm currently open for work and can join immediately.
        </span>

        <div className="bottom-row">
          <h5 className="item active">React.Js</h5>
          <h5 className="item">Node.js</h5>
          <h5 className="item">MongoDB</h5>
          <h5 className="item">Javascript</h5>
        </div>
      </div>
    </>
  );
};

export default PageOne;
