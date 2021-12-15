import React from "react";
type step2Props = {
  nextStep: () => void;
  cancel: () => void;
  shapeInputs: React.ReactNode;
  selectedShape: string | null;
};

function StepTwo(props: step2Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <div>
      <div className="desc">
        <h4>Step 2 : Insert your values</h4>
        <p>
          You have selected a <b>{props.selectedShape}</b>, please input the required
          variables.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-area">{props.shapeInputs}</div>
        <button type="submit">Go to Step 3</button>  or{" "}
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
export default StepTwo;
