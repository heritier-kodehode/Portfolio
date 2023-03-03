import React from 'react';
import styled from 'styled-components';

const ButtonLink = styled.a`
  font-size: 30px;
  text-decoration: none;
  background-color: darkorange;
  color: white;
  font-weight: 700;
  padding: 0 10px;
  border: 1px solid black;
  margin: auto 0 0 0;
  height: 3rem;
  display: inline-block;
  width: 100%;
`;

const ButtonGitLink = styled(ButtonLink)`
  background-color: aquamarine;
`;

const ProjectContainerDiv = styled.div`
  position: relative;
`;

function ProjectContainer(props) {
  return (
    <div className='projectContainer'>
      <img className='projectImg' src={props.src} />
      <a className='projectLink'>Visit Site</a>
    </div>
  );
}

export default function ProjectContainerDemo(props) {
  return (
    <ProjectContainerDiv className='projectDemo'>
      <img className='projectImg' src={props.gif} alt='projectdemo' />
      <ButtonLink href={props.link}>{props.linkText}</ButtonLink>
      <ButtonGitLink href={props.gitLink}>{props.gitLinkText}</ButtonGitLink>
    </ProjectContainerDiv>
  );
}

export { ProjectContainer, ProjectContainerDemo };
