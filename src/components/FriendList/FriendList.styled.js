import styled from 'styled-components';

export const List = styled.ul`
margin: 0 auto;
background-color: silver;
width:480px;
padding-top:15px;
padding-bottom:15px;
margin-bottom:45px;
`;

export const ListItem = styled.li`
display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  border: 3px solid black;
  box-shadow: 8px 8px 5px #444;
  background-color:white;
  width: 240px;
  margin: 0 auto;
  margin-bottom:15px;
padding-top: 10px;
padding-bottom:10px;
padding-left: 15px;
padding-right: 15px;
`;

export const Span = styled.span`
display:block;
margin-right:15px;
color: ${props => (props.isOnline === true ? "green" : "red")};
`;

export const Img = styled.img`
display: block;
border: 2px solid purple;
border-radius: 4px;
margin-right: 20px;
text-align: center;
`;

export const Paragraf = styled.p`
display: block;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
color:black;
`;