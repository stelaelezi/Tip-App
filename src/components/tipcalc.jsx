import { useState } from "react";
import Bill from "./bill";
import OutPut from "./output";
import Reset from "./reset";
import Service from "./service-input";

const TipCalc = () => {
  const [bill, setBill] = useState(0);

  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />
      <Service percentage={percentage1} onSelect={setPercentage1}>
        How did you like your service?
      </Service>
      <Service percentage={percentage2} onSelect={setPercentage2}>
        How did you like your friends like service?
      </Service>
      <OutPut bill={bill} tip={tip} />
      <Reset onReset={handleReset} />
    </div>
  );
};

export default TipCalc;
