import styled from "styled-components";

export const Container = styled.div`
height: calc(90vh - 4rem - 40px);
display: flex;
align-items: center;
@media only screen and (max-width: 1115px){
    display: block;
    text-align: center;
  }

`;

export const Image = styled.img`
  @media only screen and (max-width: 1115px){
    max-width: 100%;
  }
`;

export const Pattern = styled.img`
position: absolute;
top: 2%;
right: 15%;
@media only screen and (max-width: 1115px){
    display: none;

  }
`;

export const Card = styled.div`
  background: #8BBE8A;
  border: 4px solid #62B957;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 50px;
  min-width: 500px;
  position: relative;

  &.type--bug {
  background-color: #8bd674;
  border-color: #8cb230;
}
  &.type--dark {
    background-color: #6f6e78;
    border-color: #58575f;
  }
  &.type--dragon {
    background-color: #7383b9;
    border-color: #0f6ac0;
  }
  &.type--electric {
    background-color: #f2cb55;
    border-color: #eed535;
  }
  &.type--fairy {
    background-color: #eba8c3;
    border-color: #ed6ec7;
  }
  &.type--fighting {
    background-color: #eb4971;
    border-color: #d04164;
  }
  &.type--fire {
    background-color: #ffa756;
    border-color: #fd7d24;
  }
  &.type--flying {
    background-color: #83a2e3;
    border-color: #748fc9;
  }
  &.type--ghost {
    background-color: #8571be;
    border-color: #556aae;
  }
  &.type--grass {
    background-color: #8bbe8a;
    border-color: #62b957;
  }
  &.type--ground {
    background-color: #f78551;
    border-color: #dd7748;
  }
  &.type--ice {
    background-color: #91d8df;
    border-color: #61cec0;
  }
  &.type--normal {
    background-color: #b5b9c4;
    border-color: #9da0aa;
  }
  &.type--poison {
    background-color: #9f6e97;
    border-color: #a552cc;
  }
  &.type--psychic {
    background-color: #ff6568;
    border-color: #a552cc;
  }
  &.type--rock {
    background-color: #d4c294;
    border-color: #baab82;
  }
  &.type--steel {
    background-color: #4c91b2;
    border-color: #4a90da;
  }
  &.type--water {
    background-color: #58abf6;
    border-color: #4a90da;
  }

  @media only screen and (max-width: 1115px){
    padding: 15px 0;
    min-width: 200px;
  }
`;

export const Number = styled.span`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 31px;
color: rgba(23, 23, 27, 0.6);
@media only screen and (max-width: 1115px){
    font-size: 1em;
  }

`;

export const Title = styled.h1`
font-family: 'Montserrat', sans-serif;
text-transform: capitalize;
font-style: normal;
font-weight: 700;
font-size: 64px;
line-height: 83px;
color: #FFFFFF;
@media only screen and (max-width: 1115px){
    font-size: 2em;
  }
`;

export const Data = styled.span`
font-family: 'Montserrat', sans-serif;
text-transform: capitalize;
font-weight: 600;
font-size: 24px;
line-height: 31px;
color: rgba(23, 23, 27, 0.6);
@media only screen and (max-width: 1115px){
    font-size: 1em;
  }

`
export const DataInside = styled.span`
font-family: 'Montserrat', sans-serif;
font-weight: 700;
font-size: 36px;
line-height: 47px;
color: #FFFFFF;
@media only screen and (max-width: 1115px){
    font-size: 1em;
  }

`

export const Button = styled.button`
  margin-top: 20px;
  padding: 0.5em 1rem;
  background-color: #FFFFFF;
  border: 1px solid rgb(209,213,219);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;



  &:hover {
  background-color: rgb(249,250,251);

  }

  &:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  }

  &:focus-visible {
  box-shadow: none;
}


`
