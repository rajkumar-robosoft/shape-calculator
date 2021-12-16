import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

function ShapeCalculator() {
  const [shape, setShape] = useState<string | null>(null);
  const [step, setstep] = useState(1);
  const [length, setLength] = useState<any | null>(null);
  const [width, setWidth] = useState<any | null>(null);
  const [diameter, setDiameter] = useState<any | null>(null);
  const [side, setSide] = useState<any | null>(null);
  const [majorAxis, setMajorAxis] = useState<any | null>(null);
  const [minorAxis, setMinorAxis] = useState<any | null>(null);

  let shapeInputs;
  if (shape === "Rectangle") {
    shapeInputs = (
      <div className="shape-input-area">
        <div>
          <label>Length : </label>
          <input
            type="number"
            name="length"
            required
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div>
          <label>Width : </label>
          <input
            type="number"
            name="width"
            required
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
      </div>
    );
  } else if (shape === "Circle") {
    shapeInputs = (
      <div className="shape-input-area">
        <label>
          Diameter:
          <input
            type="number"
            name="diameter"
            required
            value={diameter}
            onChange={(e) => setDiameter(e.target.value)}
          />
        </label>
      </div>
    );
  } else if (shape === "Square") {
    shapeInputs = (
      <div className="shape-input-area">
        <label>
          Side:
          <input
            type="number"
            name="side"
            required
            value={side}
            onChange={(e) => setSide(e.target.value)}
          />
        </label>
      </div>
    );
  } else if (shape === "Ellipse") {
    shapeInputs = (
      <div className="shape-input-area">
        <div>
          <label>Major Axis : </label>
          <input
            type="number"
            name="major-axis"
            required
            value={majorAxis}
            onChange={(e) => setMajorAxis(e.target.value)}
          />
        </div>
        <div>
          <label>Minor Axis : </label>
          <input
            type="number"
            name="minor-axis"
            required
            value={minorAxis}
            onChange={(e) => setMinorAxis(e.target.value)}
          />
        </div>
      </div>
    );
  }

  const nextStep = () => {
    setstep(step + 1);
  };

  const handleCancel = () => {
    setstep(1);
    setShape(null);
    setLength(null);
    setWidth(null);
    setDiameter(null);
    setSide(null);
    setMajorAxis(null);
    setMinorAxis(null);
  };

  const handleInputData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setShape(value);
  };

  switch (step) {
    case 1:
      return (
        <div className="calculator-container">
          <StepOne
            nextStep={nextStep}
            cancel={handleCancel}
            handleFormData={handleInputData}
            values={shape}
          />
        </div>
      );
    case 2:
      return (
        <div className="calculator-container">
          <StepTwo
            nextStep={nextStep}
            cancel={handleCancel}
            shapeInputs={shapeInputs}
            selectedShape={shape}
          />
        </div>
      );
    case 3:
      return (
        <div className="calculator-container">
          <StepThree
            sLength={length}
            sWidth={width}
            sDiameter={diameter}
            sSide={side}
            sMajorAxis={majorAxis}
            sMinorAxis={minorAxis}
            selectedShape={shape}
            cancel={handleCancel}
          />
        </div>
      );
    default:
      return (
        <div className="calculator-container">
          <StepOne
            nextStep={nextStep}
            cancel={handleCancel}
            handleFormData={handleInputData}
            values={shape}
          />
        </div>
      );
  }
}
export default ShapeCalculator;
