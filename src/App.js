import { useState, useEffect } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatList from './components/ChatList';
import ChatBox from './components/ChatBox';

export default function App() {
  const [state, setState] = useState({
    text: '',
    username: '',
    chats: [],
  });

  // ================

  const handleTextChange = (e) => {
    if (e.keyCode === 13) {
      const payload = {
        username: state.username,
        message: state.text,
      };

      axios.post('http://localhost:5000/message', payload);
    } else {
      setState((prev) => ({
        ...prev,
        text: e.target.value,
      }));
    }
  };

  // ================

  useEffect(() => {
    const username = window.prompt('Username: ', 'Anonymous');

    setState((prev) => ({
      ...prev,
      username: username,
    }));

    const pusher = new Pusher('0082faa9fdf79271994d', { cluster: 'eu' });
    const channel = pusher.subscribe('chat');
    channel.bind('message', (data) => {
      setState((prev) => ({ ...prev, chats: [...prev.chats, data] }));
    });
  }, []);

  // ================

  return (
    <div>
      <h2>Hello</h2>
      <ChatBox
        text={state.text}
        username={state.username}
        handleTextChange={handleTextChange}
      />
      <ChatList chats={state.chats} />
    </div>
  );
}
