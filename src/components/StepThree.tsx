import React from "react";
type step3Props = {
  cancel: () => void;
  selectedShape: string | null;
  sLength: number;
  sWidth: number;
  sDiameter: number;
  sSide: number;
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
    return area.toFixed(2);
  };
  let areaofEllipse = (a: number, b: number) => {
    let area = Math.PI * a * b;
    return area.toFixed(2);
  };

  return (
    <div>
      <h4>Step 3 : Your results</h4>

      <div className="input-area">
        <div>
          <p>
            You have calculated the area of a <b>{props.selectedShape}</b>. Below is your result:
          </p>
          <p className="area-value">The Area is </p>
        </div>
      </div>
      <button type="button" onClick={props.cancel}>
        Start Over
      </button>
    </div>
  );
}
export default StepThree;