import { Div, Diver, Img, List, Paragraf,ListItem, Spanfirst, Span } from "./Profile.styled"



export const Profile = ({ user: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    return (
<Div>
  <Diver>
    <Img
      src={avatar}
      alt="User avatar"
      
    />
                <Paragraf>{ username}</Paragraf>
                <Paragraf>{ tag}</Paragraf>
                <Paragraf>{ location}</Paragraf>
  </Diver>
            <List>
    <ListItem>
      <Spanfirst>Followers: </Spanfirst>
                <Span>{ followers}</Span>
    </ListItem>
    <ListItem>
      <Spanfirst>Views: </Spanfirst>
                <Span>{views }</Span>
    </ListItem>
    <ListItem>
      <Spanfirst>Likes: </Spanfirst>
                <Span>{likes }</Span>
    </ListItem>
  </List>
  
</Div>
    );
};

