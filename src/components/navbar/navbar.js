import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Context } from '../../App';
import { langDataEng } from '../../data/projectsData';

const Button = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  margin: 0 5px;
  font-size: 1.5rem;
  padding: 0.5rem;
  background-color: black;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: white;
  }
  &:active {
    border: 1px solid white;
  }
`;
const LangBtn = styled.button`
  font-size: 13px;
  border: none;
  padding: 0 5px;
  cursor: pointer;
  border: 1px solid palevioletred;
  background-color: ${(props) =>
    props.activeLang === langDataEng ? 'white' : 'red'};
`;
const LangBtnSecond = styled.button`
  font-size: 13px;
  border: none;
  padding: 0 5px;
  cursor: pointer;
  border: 1px solid palevioletred;
  background-color: ${(props) =>
    props.activeLang === langDataEng ? 'red' : 'white'};
`;
const LangText = styled.span`
  font-size: 13px;
  border: none;
  padding: 0 5px;
  font-weight: 900;
  color: red;
  text-decoration: underline;
`;
const NavLinkStyled = styled(NavLink)`
  border: 1px solid black;
  border-radius: 4px;
  margin: 0 5px;
  padding: 1rem;
  font-size: 1.5rem;
  &:hover {
    color: white;
    background-color: blue;
  }
`;

const LangDiv = styled.div``;

export default function Navbar() {
  const { showContact, setShowContact, langData, handleLanguage } =
    useContext(Context);

  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? 'blue' : '#B2FFF5',
      color: isActive ? 'white' : 'blue',
    };
  };

  return (
    <div className='header'>
      <LangDiv>
        <LangText>Lang</LangText>
        <LangBtnSecond
          onClick={(e) => {
            handleLanguage(e);
          }}
          id='engLang'
          activeLang={langData}
        >
          English
        </LangBtnSecond>
        <LangBtn
          onClick={(e) => {
            handleLanguage(e);
          }}
          id='nokLang'
          activeLang={langData}
        >
          Norsk
        </LangBtn>
      </LangDiv>

      <ul className='navbar'>
        <NavLinkStyled style={navLinkStyles} to='/'>
          {langData.navBar[0].text}
        </NavLinkStyled>

        <NavLinkStyled style={navLinkStyles} to='/projects'>
          {langData.navBar[1].text}
        </NavLinkStyled>

        <Button
          active={showContact}
          onClick={() => {
            setShowContact(!showContact);
          }}
        >
          {langData.navBar[2].text}
        </Button>
      </ul>
    </div>
  );
}
