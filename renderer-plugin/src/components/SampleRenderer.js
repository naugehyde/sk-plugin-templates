import React from "react";

const SampleRenderer = ({ value, option1="option1" }) => {
  return <div className="text-primary">value: {value} option1: {option1}</div>;
};
export default SampleRenderer;
