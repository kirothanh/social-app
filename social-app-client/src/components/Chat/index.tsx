import UserButton from "../UserButton";

const Chat = () => {
  const users = [
    {
      id: 1,
      name: "Anna Nguyen",
      email: "anna.nguyen@example.com",
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    },
    {
      id: 2,
      name: "Bao Tran",
      email: "bao.tran@example.com",
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    },
    {
      id: 3,
      name: "Chi Le",
      email: "chi.le@example.com",
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    },
    {
      id: 4,
      name: "Dat Hoang",
      email: "dat.hoang@example.com",
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    },
    {
      id: 5,
      name: "Emma Pham",
      email: "emma.pham@example.com",
      avatar:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    }
  ];

  return (
    <div className="flex flex-col overflow-y-auto px-2 py-3 space-y-2">
      {users.map((user) => (
        <UserButton
          key={user.id}
          image={user.avatar}
          name={user.name}
          email={user.email}
          onClick={() => console.log("Selected user", user.id)}
        />
      ))}
    </div>
  );
};

export default Chat;
