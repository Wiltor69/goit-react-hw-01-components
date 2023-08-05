import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


export const Section = styled.section`
margin-top: 35px;
text-align:center;
background-color:silver;
width:480px;
margin:0 auto;
padding-top:15px;
margin-bottom:45px;
`;

export const Title = styled.h2`

width:250px;
background-color:white;
margin:0 auto;
text-transform: uppercase;
padding-top:15px;
padding-right:15px;
padding-bottom:15px;
padding-left:15px;
`;

export const List = styled.ul`
display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
`;

export const ListItem = styled.li`
padding-top:5px;
padding-right:5px;
padding-bottom:5px;
padding-left:5px;
width:50px;
text-align:center;

background-color:${getRandomHexColor};
margin-bottom:25px;
`;

export const Span = styled.span`
display: block;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
color:white;
margin-bottom:5px;
`;
export const SpanSecond = styled.span`
display: block;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 700;
color: white;
`;