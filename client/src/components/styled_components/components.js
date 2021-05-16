import styled from "styled-components";
import { spin, enter, inOut } from "./animations";
import { Link } from "react-router-dom";

export const Text = styled.p`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.text1};
  font-family: Noto Sans;
  font-weight: ${(props) => props.weight && props.weight};
  margin: ${(props) => props.margin && props.margin};
  font-size: ${(props) => props.size && props.size}px;
  max-width: ${(props) => props.maxWidth && props.maxWidth}px;
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
  gap: ${(props) => (props.gap ? props.gap : 10)}px;
`;

export const SpaceOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  max-width: ${(props) => (props.mw ? props.mw : 90)}%;
  margin: auto;
`;

export const MainContainer = styled.div`
  max-width: 850px;
  margin: auto;
  padding: 20px;
`;

export const LoginContainer = styled.div`
  padding: 20px;
  border: 2px solid ${(props) => props.theme.color.primary};
  border-radius: 8px;
  width: 400px;

  @media screen and (max-width: 440px) {
    border: 0;
  }
`;

export const Label = styled.label`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.text4};
  font-family: ${(props) => props.theme.font2};
  font-weight: 600;
`;

export const Input = styled.div`
  padding: 0 10px;
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.text6};
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input,
  textarea {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.color.text4};
    box-sizing: border-box;
    height: 45px;
    width: 90%;
    font-size: 1.2rem;

    &:focus {
      outline: 0;
    }
  }

  textarea {
    height: 87px;
    width: 90%;
    font: Poppins;
    padding: 10px 0;
  }
  svg {
    color: ${(props) => props.theme.color.text6};
    font-size: 1.2rem;
  }

  &:focus-within {
    border: 2px solid ${(props) => props.theme.color.primary};
  }
`;

export const Button = styled.button`
  padding: 12px 25px;
  background: ${(props) => props.theme.color.primary};
  color: #fff;
  border: 0;
  border-radius: 4px;
  width: ${(props) => (props.fullWidth ? "100%" : null)};
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: ${(props) => props.padding && props.padding};
  svg {
    font-size: 1.1rem;
    margin-right: 5px;
  }
`;

export const Header1 = styled.h1`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.text1};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header2 = styled.h2`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.text1};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header3 = styled.h3`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.text1};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header4 = styled.h4`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.text1};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header5 = styled.h5`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.text1};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const Header6 = styled.h6`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.text1};
  font-family: ${(props) => props.theme.font2};
  margin: 0;
`;

export const StyledLink = styled(Link)`
  font-family: ${(props) => props.theme.font1};
  text-decoration: none;
  color: ${(props) => props.theme.color.primary};
`;

export const Small = styled.small`
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.text4};
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

export const MainNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  font-family: poppins;
  padding: 20px 0;
  gap: 15px;
  li {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    position: relative;
    padding: 0px 15px;

    a {
      color: ${(props) => props.theme.color.text3};
      font-weight: 500;
    }

    &:nth-child(${(props) => props.active}) {
      a {
        color: ${(props) => props.theme.color.primary};
        font-weight: 600;
      }
      span {
        position: absolute;
        bottom: -21px;
        left: 0;
        width: 100%;
        height: 3px;
        background: ${(props) => props.theme.color.primary};
        border-top-right-radius: 3px;
        border-top-left-radius: 3px;
      }
    }
  }
`;

export const ProfileTop = styled.div`
  position: relative;
`;

export const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 682px) {
    height: 170px;
  }
`;

export const ProfileDetails = styled.div`
  position: relative;
  width: 100%;
  padding: 16px;
  background: #fff;
  border-radius: 12px;
  margin-top: 180px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 682px) {
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
  }
`;

export const Details = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width: 682px) {
    flex-direction: column;
    align-items: center;
    gap: 0;

    p {
      text-align: center;
    }
  }
`;

export const DetailTop = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width: 682px) {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;

export const Avatar = styled.div`
  margin-top: -50px;
  padding: 3px;
  background: #fff;
  border-radius: 4px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 4px;
  }
`;

export const Overylay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #000;
  opacity: 0.75;
  z-index: 2;
`;

export const EditProfileWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const EditProfileCard = styled.div` 
height:500px;
width:600px; 
box-sizing:border-box;
background:#fff;
border-radius:4px; 
overflow-Y:scroll;
padding-bottom:20px; 
animation:0.5s ${enter} forwards;
  .header{
    padding 12px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:sticky;
    top:0;
    left:0;
    z-index:5;
    background:#fff;

    svg{
      font-size:1.2rem;
      color:${(props) => props.theme.color.text4};
      cursor:pointer;
    }
  }

  hr{
    display: block; 
    height: 1px;
    border: 0; 
    border-top: 1px solid ${(props) => props.theme.color.text7};
    margin: auto; 
    padding: 0;
    width:95%;
  }

  .banner{
    position:relative;
    width:100%;
    height:130px;
    display:flex;
    align-item:center;
    justify-content:center;

    .overlay{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: #000;
    opacity: 0.5;
    z-index:3;
    }

    img{
    object-fit:cover;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:2;
  }

  .icons{
    z-index:4;
    display:flex;
    align-items:center; 
    svg{
    color:${(props) => props.theme.color.white}};
    cursor:pointer;
  }
  }

  .avatar{
    position:relative;
    height:135px;
    width:135px;
    border-radius:50%;
    margin-top:-40px;
    border:4px solid #fff;
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;

    .overlay{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background: #000;
      opacity: 0.5;
      z-index:4;
      border-radius:50%;
      }
    img{
      object-fit:cover;
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      border-radius:50%;
      
    }
    svg{
      z-index:5;
      color:${(props) => props.theme.color.white}};
      cursor:pointer;
    }
  }

  @media screen and (max-width: 616px) { 
    width:90%; 
  }
`;

export const AlertsView = styled.div`
  position: fixed;
  top: 70px;
  right: 10px;
  width: 250px;
  z-index: 10;
`;

export const Alert2 = styled.div`
  max-width: 250px;
  padding: 10px;
  background: ${(props) => props.color && props.theme.color[props.color]};
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-family: poppins;
  margin-bottom: 10px;
  border-radius: 4px;
  animation: 4s ${inOut} forwards;
`;
