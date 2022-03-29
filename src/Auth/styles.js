import styled from "styled-components";

// Signup.js and Signin.js styles

export const FormBody = styled.form`
  display: flex;
  align-items: center;
  flex-flow: column;
  min-height: 100px;
  width: 400px;
  margin: auto;
  border-radius: 10px;
  background-color: #111111;
  color: rgb(240, 231, 231);
  font-weight: 700;
  padding: 10px;

  @media (max-width: 440px) {
    width: 95%;
  }
`;

export const FormTitle = styled.h2`
  color: #a986ff;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

export const Input = styled.input`
  height: 2rem;
  width: 16rem;
  background-color: rgb(32, 31, 31);
  border: none;
  color: #fff;
  border-radius: 5px;
  flex-direction: row;
  outline: none;
  width: 100%;
  padding: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 85%;
  margin-bottom: 30px;

  @media (max-width: 440px) {
    width: 98%;
  }
`;

export const InputLabel = styled.label`
  color: #fff;
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 14px;
  font-weight: 300;
  margin-top: 3px;
`;

// Button.js styles
export const ButtonContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormButton = styled.button`
  height: 2.5rem;
  width: 100px;
  font-weight: 700;
  background-color: rgb(32, 31, 31);
  color: #fff;
  border: none;
  background-color: #8f65f5;
  transition: 0.3s;
  margin-bottom: 10px;

  &:disabled {
    background-color: #8f65f5;
  }

  &:not(:disabled):hover {
    background-color: #603cb7;
  }
  border-radius: 1rem;
  cursor: pointer;
`;
