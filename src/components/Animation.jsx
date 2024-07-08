import { useEffect, useState } from "react";
import logo from "../../src/assets/Immagine_2024-07-08_181241-removebg-preview.png";

export function Animation() {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setAnimationStarted(true);
    const timer = setTimeout(() => {
      setAnimationStarted(false);
    }, 5000); // Duration of the animation plus delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {animationStarted && (
        <div className="w-screen h-screen fixed flex z-50 pointer-events-none">
          <div
            className={`w-[50%] bg-black ${
              animationStarted ? "slide-in-1" : ""
            }`}
          ></div>
          <div
            className={`w-[50%] bg-black ${
              animationStarted ? "slide-in-2" : ""
            }`}
          ></div>
          <div
            className={`absolute w-full h-screen flex justify-center items-center fade-out`}
          >
            <img src={logo} alt="logoSpinner" className="w-[300px]" />
          </div>
        </div>
      )}
    </>
  );
}
