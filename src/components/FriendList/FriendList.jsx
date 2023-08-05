import { Img, List, ListItem, Span, Paragraf } from "./FriendList.styled";
import { VscCircleLargeFilled } from "react-icons/vsc";

export const FriendList = ({ friends }) => {
    return (
<List>
            {friends.map(friend => (
                <ListItem  key = {friend.id}>
                    <Span >
                        <VscCircleLargeFilled size={20} />
                        {/* {friend.isOnline} */}
                    </Span>
  <Img src={friend.avatar} alt="User avatar" width={50}/>
                    <Paragraf>{ friend.name}</Paragraf>
</ListItem>))}
</List>
    );
};