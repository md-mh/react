import { sum } from "@md-mh/easy-calculator";
import React from "react";

const EasyCalculator = () => {
  return (
    <div>
      <h1>Easy Calculator</h1>

      <h3>{sum(5, 10)}</h3>
    </div>
  );
};

export default EasyCalculator;
