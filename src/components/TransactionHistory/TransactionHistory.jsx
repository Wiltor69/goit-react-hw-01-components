import { Table, Tbody, Td, Th, Thead, Tr, Trsecond } from "./TransactionHistory.styled";


export const TransactionHistory = ({ items }) => {
    return (
        <Table>
  <Thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </Thead>

  <Tbody>
                
                {items.map(item => (
                        <Trsecond key = {item.id}>
                        <Td>{ item.type}</Td>
                        <Td>{item.amount}</Td>
                        <Td>{ item.currency}</Td>
      </Trsecond>))}
      
    
    
  </Tbody>
</Table>

    );
};