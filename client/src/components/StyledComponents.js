import styled from "styled-components";
import { spin } from "./animations";
import { Link } from "react-router-dom";

export const Text = styled.p`
  color: ${(props) =>
    props.color && props.color === "white"
      ? props.theme.color.white
      : props.theme.color.text1};
  font-family: Noto Sans;
`;

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const FlexGap = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.gap ? props.gap : 10)}px;
`;

export const LoginContainer = styled.div`
  padding: 20px;
  border: 2px solid #2f80ed;
  border-radius: 8px;
  width: 400px;
`;

export const Label = styled.div`
  color: #333;
  font-family: ${(props) => props.theme.font2};
  font-weight: 600;
`;

export const Input = styled.div`
  padding: 0 10px;
  width: 100%;
  border: 2px solid #999;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    background: transparent;
    border: 0;
    color: #333;
    box-sizing: border-box;
    height: 45px;
    width: 90%;
    font-size: 1.2rem;

    &:focus {
      outline: 0;
    }
  }
  svg {
    color: #777;
    font-size: 1.2rem;
  }

  &:focus-within {
    border: 2px solid #2f80ed;
  }
`;

export const Button = styled.button`
  padding: 12px 25px;
  background: #2f80ed;
  color: #fff;
  border: 0;
  border-radius: 4px;
  width: ${(props) => (props.fullWidth ? "100%" : null)};
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 1.1rem;
    margin-right: 5px;
  }
`;

export const Header1 = styled.h1`
  color: ${(props) =>
    props.color && props.color === "primary"
      ? "#2f80ed"
      : props.color && props.color === "grey"
      ? "#333"
      : "#000"};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header2 = styled.h2`
  color: ${(props) =>
    props.color && props.color === "primary"
      ? "#2f80ed"
      : props.color && props.color === "grey"
      ? "#333"
      : "#000"};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header3 = styled.h3`
  color: ${(props) =>
    props.color && props.color === "primary"
      ? "#2f80ed"
      : props.color && props.color === "grey"
      ? "#333"
      : "#000"};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header4 = styled.h4`
  color: ${(props) =>
    props.color && props.color === "primary"
      ? "#2f80ed"
      : props.color && props.color === "grey"
      ? "#333"
      : "#000"};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header5 = styled.h5`
  color: ${(props) =>
    props.color && props.color === "primary"
      ? "#2f80ed"
      : props.color && props.color === "grey"
      ? "#333"
      : "#000"};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header6 = styled.h6`
  color: ${(props) =>
    props.color && props.color === "primary"
      ? "#2f80ed"
      : props.color && props.color === "grey"
      ? "#333"
      : "#000"};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const StyledLink = styled(Link)`
  font-family: ${(props) => props.theme.font1};
  text-decoration: none;
  color: #2f80ed;
`;

export const Small = styled.small`
  color: #333;
  font-family: ${(props) => props.theme.font1};
`;

export const Alert = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.color.danger};
  border-radius: 4px;
  p {
    width: 85%;
    margin: 0;
    color: #fff;
  }

  svg {
    font-size: 1.25rem;
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
  }
`;

export const Loader = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    animation: ${spin} 1s linear infinite;
  }
`;
