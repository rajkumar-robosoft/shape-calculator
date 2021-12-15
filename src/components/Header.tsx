import React from "react";
type HeaderProps = {
  title: string;
};
function Header(props: HeaderProps) {
  return (
    <div className="header">
      <h2>{props.title}</h2>
    </div>
  );
}
export default Header;
