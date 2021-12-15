import React, { useState } from "react";

type StepOneProps = {
  nextStep: () => void;
  cancel: () => void;
  handleFormData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: string | null;
};

function StepOne(props: StepOneProps) {
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      props.values === "Rectangle" ||
      props.values === "Circle" ||
      props.values === "Square" ||
      props.values === "Ellipse"
    ) {
      props.nextStep();
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <div className="desc">
        <h4>Step 1 : Select your shape</h4>
        <p>
          Please select the shape that you would like to calculate the area of
          and press the button "Go to step 2"
        </p>
        <p className="error-msg">
          {error ? 'Please select a shape' : null}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-area">
          <div className="radio">
            <label>
              <input
                type="radio"
                name="shape"
                value="Rectangle"
                checked={props.values === "Rectangle"}
                onChange={props.handleFormData}
              />
              Rectangle
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="shape"
                value="Circle"
                checked={props.values === "Circle"}
                onChange={props.handleFormData}
              />
              Circle
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="shape"
                value="Square"
                checked={props.values === "Square"}
                onChange={props.handleFormData}
              />
              Square
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="shape"
                value="Ellipse"
                checked={props.values === "Ellipse"}
                onChange={props.handleFormData}
              />
              Ellipse
            </label>
          </div>
        </div>
        <button type="submit">Go to Step 2</button>  or{" "}
        <button
          type="button"
          className="btn-cancel"
          onClick={() => props.cancel()}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
export default StepOne;
