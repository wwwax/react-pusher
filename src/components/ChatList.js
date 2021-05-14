import avatar from '../img/hacker.png';
import './ChatList.css';

export default function ChatList({ chats }) {
  return (
    <ul>
      {chats.map((chat) => {
        return (
          <div>
            <div className='row show-grid'>
              <div className='col-xs-12'>
                <div className='chatMessage'>
                  <div key={chat.id} className='box'>
                    <p>
                      <strong>{chat.username}</strong>
                    </p>
                    <p>{chat.message}</p>
                  </div>
                  <div className='imageHolder'>
                    <img src={avatar} className='img-responsive avatar' alt='logo' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
