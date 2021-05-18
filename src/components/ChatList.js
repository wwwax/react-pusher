export default function ChatList({ chats }) {
  return (
    <ol>
      {chats.map((chat, id) => {
        return (
          <li key={id}>
            <span style={{ color: 'tomato' }}>{chat.username}: </span>
            <span>{chat.message}</span>
          </li>
        );
      })}
    </ol>
  );
}
