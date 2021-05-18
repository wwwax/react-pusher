export default function Chatbox({ text, username, handleTextChange }) {
  return (
    <div>
      <input
        type='text'
        value={text}
        placeholder='chat here...'
        onChange={handleTextChange}
        onKeyDown={handleTextChange}
      />
      <h4 className='greetings'>Hello, {username}</h4>
    </div>
  );
}
