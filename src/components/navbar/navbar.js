import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Context } from "../../App";
const Button = styled.button``;
export default function Navbar() {
  const showOrHide = useContext(Context);
  return (
    <div className="header">
      <ul className="navbar">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Button
            onClick={() => {
              showOrHide.setShowContact(!showOrHide.showContact);
            }}
          >
            Contact Me
          </Button>
        </li>
      </ul>
    </div>
  );
}
