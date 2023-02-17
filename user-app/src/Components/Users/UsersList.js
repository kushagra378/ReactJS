import "./UserList.css";
const UserList = (props) => {
  return (
    <div className="user">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} | {user.age} Years Old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
