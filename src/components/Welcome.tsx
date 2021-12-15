import React from "react";

type WelcomeProps = {
  title: string;
  children: React.ReactNode;
};
function Welcome(props: WelcomeProps) {
  return (
    <div className="welcome-container">
      <h3>{props.title}</h3>
      {props.children}
    </div>
  );
}
export default Welcome;
