import React from "react";
import styled from "styled-components";
import gifDemo from "../../images/audiofile-3-d.gif";

const ButtonLink = styled.a`
  font-size: 30px;
  text-decoration: none;
  background-color: darkorange;
  color: white;
  font-weight: 700;
  padding: 0 10px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto 0 0 0;
  height: min-content;
`;
const ProjectContainerDiv = styled.div`
  position: relative;
`;

function ProjectContainer(props) {
  return (
    <div className="projectContainer">
      <img className="projectImg" src={props.src} />
      <a className="projectLink">Visit Site</a>
    </div>
  );
}

export default function ProjectContainerDemo(props) {
  return (
    <ProjectContainerDiv className="projectDemo">
      <img className="projectImg" src={props.gif} alt="projectdemo" />
      <ButtonLink href={props.link}>Visit Site</ButtonLink>
    </ProjectContainerDiv>
  );
}

export { ProjectContainer, ProjectContainerDemo };
