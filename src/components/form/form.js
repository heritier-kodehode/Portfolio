import React, { useEffect, useContext, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Context } from "../../App";
import styled from "styled-components";
import { SocialIcons, ThumbsUp } from "../iconssvg/icons";

const FormContainer = styled.div`
  background-color: lightblue;
  position: fixed;
  display: ${(props) => (props.showOrHideStatus === false ? "none" : "flex")};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
`;

const OurForm = styled.form`
  width: 500px;
  height: 650px;
  background-color: #e3ae46;
  border: 2px solid #0000fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 90px;
  margin: 30px auto 0 auto;
  -webkit-box-shadow: -2px -1px 15px 7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -3px -2px 30px 14px rgba(0, 0, 0, 0.425);
  box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
`;
const Input = styled.input`
  height: 50px;
  padding: 5px;
  font-size: 18px;
  outline-color: rgb(66, 245, 221);
`;
const Textarea = styled.textarea`
  resize: none;
  padding: 5px;
  font-size: 18px;
  outline-color: rgb(66, 245, 221);
`;
const FormBtn = styled.button`
  background-color: #8afdff;
  height: 60px;
  font-weight: 900;
  margin-top: 5px;
  &:hover {
    background-color: rgb(66, 245, 221);
    cursor: pointer;
  }
`;
const Label = styled.label`
  text-align: start;
  width: 100%;
  margin: 10px 0 5px 0;
  font-weight: 900;
`;
const Title = styled.h2`
  display: flex;
  justify-content: space-between;
`;
const Cross = styled.button`
  color: white;
  border: 5px solid black;
  padding: 2px 8px;
  background-color: black;
  font-weight: 800;
  font-size: 30px;
  &:hover {
    color: #8afdff;
    cursor: pointer;
  }
`;
const ContactIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
function Form() {
  const { setShowContact, showContact, langData } = useContext(Context);
  const form = useRef();
  const [showThumbs, setShowThumbs] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_69crlpm",
        "template_1vbi9lb",
        form.current,
        "WL068qR-rnETie1QZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.querySelector("#username").value = "";
          document.querySelector("#useremail").value = "";
          document.querySelector("#message").value = "";

          setShowThumbs(!showThumbs);
          setTimeout(function () {
            setShowContact(false);
            setShowThumbs(false);
          }, 2500);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <FormContainer showOrHideStatus={showContact}>
      <ThumbsUp showThumbs={showThumbs} />
      <OurForm ref={form} onSubmit={sendEmail}>
        <Title>
          {langData.contactMeForm[0].text}
          <Cross
            onClick={() => {
              setShowContact(!showContact);
            }}
          >
            X
          </Cross>
        </Title>
        <SocialIcons />
        <Label htmlFor="username">{langData.contactMeForm[1].text}:</Label>
        <Input
          type="text"
          id="username"
          name="user_name"
          placeholder={langData.contactMeForm[4].text}
          required
        />
        <Label htmlFor="useremail">{langData.contactMeForm[2].text}:</Label>
        <Input
          type="text"
          id="useremail"
          name="user_email"
          placeholder={langData.contactMeForm[5].text}
          required
        />
        <Label htmlFor="message">{langData.contactMeForm[3].text}:</Label>
        <Textarea
          placeholder={langData.contactMeForm[6].text}
          name="message"
          id="message"
          cols="30"
          rows="10"
        ></Textarea>
        <FormBtn>{langData.contactMeForm[7].text}</FormBtn>
      </OurForm>
    </FormContainer>
  );
}

export { Form };
