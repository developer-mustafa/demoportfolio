import "./PageTwo.css";

import Card from "../../Components/Card/Card";

import icon1 from "../../props/performance.gif";
import icon2 from "../../props/media.gif";
import icon3 from "../../props/cloud-network.gif";
import icon4 from "../../props/tech-support.gif";
import icon5 from "../../props/security.gif";

const PageTwo = () => {
  return (
    <>
      <svg
        className="drip"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#adade2"
          fill-opacity="1"
          d="M0,160L16,138.7C32,117,64,75,96,53.3C128,32,160,32,192,53.3C224,75,256,117,288,165.3C320,213,352,267,384,293.3C416,320,448,320,480,266.7C512,213,544,107,576,58.7C608,11,640,21,672,42.7C704,64,736,96,768,144C800,192,832,256,864,250.7C896,245,928,171,960,133.3C992,96,1024,96,1056,112C1088,128,1120,160,1152,186.7C1184,213,1216,235,1248,250.7C1280,267,1312,277,1344,261.3C1376,245,1408,203,1424,181.3L1440,160L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
        ></path>
      </svg>

      <div className="page-two-text-container">
        <h1 className="main-text">Modern Technology</h1>
        <span className="sub-text">
          React JS HTML5 and CSS, Bootstrap and React Bootstrap MongoDB, Node
          JS, React Native. Redux, Material UI, JavaScript, Express JS,
        </span>
      </div>

      <div className="container">
        <Card
          Icon={icon1}
          Title="Performance"
          SubTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consequatur. Eos esse laboriosam molestiae, magni similique quae illo assumenda. Consequuntur!"
        />
        <Card
          Icon={icon2}
          Title="Media"
          SubTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consequatur. Eos esse laboriosam molestiae, magni similique quae illo assumenda. Consequuntur!"
        />
        <Card
          Icon={icon3}
          Title="Cloud & Networking"
          SubTitle="Dolorum voluptatum corrupti sed delectus! Consectetur nam molestias esse assumenda reprehenderit facere laudantium vero nulla consequuntur quam architecto nostrum."
        />
        <Card
          Icon={icon4}
          Title="Tech Support"
          SubTitle="Explicabo molestias officiis eos doloremque aliquam, ipsum a laudantium dolorem dolore quidem magni voluptas voluptatum nihil ducimus, possimus veritatis consequuntur."
        />
        <Card
          Icon={icon5}
          Title="Security"
          SubTitle="Deserunt enim repellat nesciunt quasi in qui voluptatibus, at ex placeat molestias culpa veritatis maxime voluptate ipsum alias nihil numquam, nam ducimus!"
        />
        <Card
          Icon={icon1}
          Title="Lorem amet consectetur"
          SubTitle="Earum doloribus illum quaerat, itaque odio adipisci libero error ullam. Quam, nostrum at. Impedit enim, illo accusamus consectetur magnam ipsa vero soluta vel, sunt consequatur."
        />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4a137e"
          fill-opacity="1"
          d="M0,256L16,240C32,224,64,192,96,192C128,192,160,224,192,197.3C224,171,256,85,288,53.3C320,21,352,43,384,96C416,149,448,235,480,277.3C512,320,544,320,576,272C608,224,640,128,672,122.7C704,117,736,203,768,224C800,245,832,203,864,170.7C896,139,928,117,960,122.7C992,128,1024,160,1056,181.3C1088,203,1120,213,1152,208C1184,203,1216,181,1248,149.3C1280,117,1312,75,1344,53.3C1376,32,1408,32,1424,32L1440,32L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default PageTwo;
