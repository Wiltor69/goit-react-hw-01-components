import { List, ListItem, Section, Span, Title,SpanSecond } from "./Statistics.styled"



export const Statistics = ({ title, stats }) => {
    return (
      <Section >
        {!title &&
          <Title >Upload stats</Title>
        }
        <List>
          
                {stats.map(stat => (
                  <ListItem key={stat.id}>
                    
                        <Span>{ stat.label}</Span>
                        <SpanSecond>{ stat.percentage} %</SpanSecond>
          
    </ListItem>
    ) )}
    
  </List>
</Section>
    );
};