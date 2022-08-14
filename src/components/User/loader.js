import { useLottie } from "lottie-react";
const loader = require("./loader.json");

const LottieLoader = () => {
  const options = {
    animationData: loader,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default LottieLoader;