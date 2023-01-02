// import MarsAnimation from "./marsAnimation/marsAnimation";
import Slider from "../sliderMarsPhoto/slider";
import Info from "../info_card/info";
import Rovercard from "../rowerCard/rovercard";
import { Planet } from "../MarsThree/Planet";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import "./home.css";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const HomePage = () => {
  return (
    <>
    <div className="App">
      <div className="grid-container">
        <div className="grid-item">
          <Info />
        </div>
        <div className="grid-item">
          <CanvasContainer>
            <Canvas>
              <Suspense fallback={null}>
                <Planet />
              </Suspense>
            </Canvas>
          </CanvasContainer>
        </div>
      </div>
      <div className="slider-container">
        <Slider />
      </div>
      <div className="card-container">
        <Rovercard />
      </div>
      </div>
    </>
  );
};

export default HomePage