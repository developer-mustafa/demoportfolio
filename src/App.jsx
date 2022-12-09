import "./App.css";
import Header from "./Components/Header/Header";
import PageOne from "./Pages/PageOne/PageOne";
import PageThree from "./Pages/PageThree/PageThree";
import PageTwo from "./Pages/PageTwo/PageTwo";

function App() {
  return (
    <div className="app">
      <div className="wrapper" style={{ "--bg": "#adade2" }}>
        <Header />
        <PageOne />
      </div>

      <div className="wrapper" style={{ "--bg": "#d6e7f7" }}>
        <PageTwo />
      </div>

      <div className="wrapper page-three">
        <PageThree />
        <svg
          className="drip"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#092e52"
            fill-opacity="1"
            d="M0,96L16,106.7C32,117,64,139,96,170.7C128,203,160,245,192,240C224,235,256,181,288,138.7C320,96,352,64,384,53.3C416,43,448,53,480,96C512,139,544,213,576,213.3C608,213,640,139,672,117.3C704,96,736,128,768,144C800,160,832,160,864,144C896,128,928,96,960,74.7C992,53,1024,43,1056,42.7C1088,43,1120,53,1152,74.7C1184,96,1216,128,1248,160C1280,192,1312,224,1344,218.7C1376,213,1408,171,1424,149.3L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
