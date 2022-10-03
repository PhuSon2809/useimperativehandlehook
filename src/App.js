import { useEffect, useRef } from "react";
import "./App.css";
import GlobalStyles from "./GlobalStyles";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Video from "./Video";

function App() {
  const videoRef = useRef();

  useEffect(() => {
    console.log(videoRef.current);
  });

  const handlePlay = () => {
    videoRef.current.play();
  };

  const hanlepause = () => videoRef.current.pause();
  return (
    // Sử dụng css global khi dùng module ko css đc hco tag name
    <GlobalStyles> 
      <div className="App">
        <h1>useImperativeHandle</h1>
        <Video ref={videoRef} />
        <button onClick={handlePlay}>Play</button>
        <button onClick={hanlepause}>Pause</button>

        <br />
        <Heading />
        <Paragraph />
      </div>
    </GlobalStyles>
  );
}

export default App;

//Developments: npm start / yarn start -> CSS internal

//Production: npm run buil / yarn run buil -> CSS external
