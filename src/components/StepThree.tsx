import React from "react";
type step3Props = {
  cancel: () => void;
  selectedShape: string | null;
  sLength: number;
  sWidth: number;
  sDiameter: number;
  sSide: number;
  sMajorAxis: number;
  sMinorAxis: number;
};

function StepThree(props: step3Props) {
  let areaofRect = (l: number, w: number) => {
    let area = l * w;
    return area;
  };
  let areaofCircle = (d: number) => {
    let r = d / 2;
    let area = Math.PI * r * r;
    return area.toFixed(2);
  };
  let areaofSquare = (a: number) => {
    let area = a * a;
    return area;
  };
  let areaofEllipse = (a: number, b: number) => {
    let area = Math.PI * a * b;
    return area.toFixed(2);
  };

  let areaInputs;
  if (props.selectedShape === "Rectangle") {
    let length = props.sLength;
    let width = props.sWidth;
    let area = areaofRect(length, width);
    areaInputs = (
      <div>
        <p>
          You have calculated the area of a <b>Rectangle</b> with a length of{" "}
          {props.sLength} and width of {props.sWidth}. Below is your result:
        </p>
        <p className="area-value">The Area is {area}</p>
      </div>
    );
  } else if (props.selectedShape === "Circle") {
    let diameter = props.sDiameter;

    let area = areaofCircle(diameter);
    areaInputs = (
      <div>
        <p>
          You have calculated the area of a <b>Circle</b> with a diameter of{" "}
          {props.sDiameter}. Below is your result:
        </p>
        <p className="area-value">The Area is {area}</p>
      </div>
    );
  } else if (props.selectedShape === "Square") {
    let side = props.sSide;
    let area = areaofSquare(side);
    areaInputs = (
      <div>
        <p>
          You have calculated the area of a <b>Square</b> with a side of{" "}
          {props.sSide}. Below is your result:
        </p>
        <p className="area-value">The Area is {area}</p>
      </div>
    );
  } else if (props.selectedShape === "Ellipse") {
    let majorAxis = props.sMajorAxis;
    let minorAxis = props.sMinorAxis;
    let area = areaofEllipse(majorAxis, minorAxis);
    areaInputs = (
      <div>
        <p>
          You have calculated the area of a <b>Ellipse</b> with a major axis of{" "}
          {props.sMajorAxis} and minor axis of {props.sMinorAxis}. Below is your
          result:
        </p>
        <p className="area-value">The Area is {area}</p>
      </div>
    );
  }

  return (
    <div>
      <h4>Step 3 : Your results</h4>

      <div className="input-area">{areaInputs}</div>
      <button type="button" onClick={props.cancel}>
        Start Over
      </button>
    </div>
  );
}
export default StepThree;
