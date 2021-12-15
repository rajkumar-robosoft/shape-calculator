import React from "react";

type Adsprops = {
  placeholder: string | null;
  children?: React.ReactNode;
};

function Ads(props: Adsprops) {
  return (
    <div className="ads-area">
      <span>{props.placeholder}</span>
      {props.children}
    </div>
  );
}
export default Ads;
