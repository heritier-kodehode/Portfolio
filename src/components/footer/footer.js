import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../App';
export const Div = styled.div`
  background: linear-gradient(to bottom, #b2fff5, #fff);
  margin-top: auto;
`;

export const Button = styled.button`
  color: #000;
  font-size: 1em;
  font-weight: 900;
  margin: 3rem auto 2em auto;
  padding: 0.25em 1em;
  border: 1px solid black;
  width: 80%;
  height: 50px;
  background: #8afdff;

  &:hover {
    cursor: pointer;
    background: #fff;
    border: 2px solid blue;
    color: blue;
  }
`;

function Footer() {
  const { setShowContact, showContact, langData } = useContext(Context);
  return (
    <Div>
      <Button
        onClick={() => {
          setShowContact(!showContact);
        }}
      >
        {langData.buttonText[1].text}
      </Button>
    </Div>
  );
}

export default Footer;
