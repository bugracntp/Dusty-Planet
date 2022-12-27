import "./App.css";
import MarsAnimation from "./marsAnimation/marsAnimation";
import Slider from "./sliderMarsPhoto/slider";
import Info from "./info_card/info";
import Rovercard from "./rowerCard/rovercard";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <Info />
        </div>
        <div className="grid-item">
          <MarsAnimation />
        </div>
      </div>
      <div className="slider-container">
        <Slider />
      </div>
      <div className="card-container">
       
        <Rovercard/>
      </div>
    </div>
  );
}

export default App;
