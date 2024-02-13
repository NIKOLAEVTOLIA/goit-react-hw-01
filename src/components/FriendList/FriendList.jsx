import FriendListItem from '../FriendListItem/FriendListItem';
// import css from './FrienList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;