import styled from 'styled-components';

export const Table = styled.table`
margin: 0 auto;
table-layout: fixed;
  width: 480px;
  border-collapse: collapse;
  border: 4px solid black;
  margin-bottom:45px;
  
`;

export const Thead = styled.thead`
background-color: darkgreen;
`;

export const Tr = styled.tr`
border-collapse: collapse;
border: 2px solid black;

`;

export const Th = styled.th`
text-align: center;
font-family: 'Roboto', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 600;
color:white;
padding-top:10px;
padding-bottom:10px;
border: 2px solid black;

`;

export const Tbody = styled.tbody`
text-align:center;

`;

export const Td = styled.td`
padding-top:10px;
padding-bottom:10px;
text-align: center;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 400;
color:black;
border: 2px solid black;

`;
