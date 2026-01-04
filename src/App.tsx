import { useGSAP } from "@gsap/react";
import "./App.css";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 2,
  });
  useGSAP(() => {
    timeline.to("#box", {
      x: 500,
      scale: 1.5,
      rotation: 360,
      ease: "bounce",
      duration: 2,
    });
    timeline.to("#box", {
      y: 300,
      scale: 0.75,
      rotation: 0,
      duration: 2,
    });
    timeline.to("#box", {
      x: 0,
      ease: "bounce",
      rotation: 0,
      borderRadius: "100%",
      duration: 2,
    });
  }, []);
  return (
    <>
      <div id="box" className="bg-black h-40 w-40 m-20 rounded-lg"></div>
      <div className="m-20">
        <button
          className="p-2 bg-red border-2 border-indigo-500 rounded-lg hover:bg-black hover:text-white"
          onClick={() => {
            console.log("Hello");
            if (timeline.paused()) timeline.play();
            else timeline.pause();
          }}
        >
          Play/Pause
        </button>
      </div>
    </>
  );
}

export default App;
