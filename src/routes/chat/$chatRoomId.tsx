import { createFileRoute, useMatch } from '@tanstack/react-router'
import { useEffect, useState } from 'react';
import { IoChevronForwardSharp, IoPersonAdd, IoStar } from 'react-icons/io5';
import io from "socket.io-client";
import { useProfileData } from '../../hooks/useProfileData';
import Location from '../../components/common/Location';
import { BsThreeDots } from 'react-icons/bs';
import '../../styles/chat/chat.scss';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const socket = io("http://localhost:3000");

const Chat: React.FC = () => {
  const { params: { chatRoomId },} = useMatch({ from: '/chat/$chatRoomId' });

  const { user } = useProfileData();

  const [messages, setMessages] = useState<any[]>([{ text: '벌써 다음달이 가을이네요 참...', type: 'receive'}]);
  const [inputValue, seInputValue] = useState('');

  const sendMessage = () => {
    socket.emit("send_message", { message: `${inputValue}` });
    setMessages(prev => [...prev, { text: inputValue, type: 'send' }]);
    console.log(inputValue);
  };

  useEffect(() => {
    if (chatRoomId) {
      socket.emit("join_room", chatRoomId);
      console.log(`Joined room: ${chatRoomId}`);
    }

    socket.on("receive_message", (data) => {
      setMessages(prev => [...prev, { text: inputValue, type: 'receive' }]);
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="chatcontainer">
      <div className="fixednav">
        <div className="chatnav">

          {/* 사용자 정보 영역 */}
          <div className="chatnav__left">
            <IoChevronForwardSharp className="chatnav__left__back"/>

            <div>
              <div className="chatnav__left__user">
                <div className="chatnav__left__user__name">{user.username}</div>
                <div className="chatnav__left__user__rate">
                  <div className="chatnav__left__user__rate__icon"><IoStar /></div>
                  <div className="chatnav__left__user__rate__num">{user.average_rating}</div>
                </div>
              </div>
              <Location location="서울특별시 은평구" />
            </div>
          </div>

          <div className="chatnav__right">
            <div className="chatnav__right__friend">
              <IoPersonAdd className="chatnav__right__friend__icon"/>
              <div className="chatnav__right__friend__text">친구 신청</div>
            </div>
            <div><BsThreeDots className="chatnav__right__option"/></div>
          </div>

        </div>

        {/* 게시물 정보 영역 */}
        <div className="chatpost">
          <img src={user.profile_picture_url} alt="post.img" />

          <div className="content">
            <div className="content__top">
              <div className="content__top__title">빠른 북한산 1박 2일 글램핑 🏞️</div>
              <div className="content__top__tag">#동행</div>
            </div>
            <div className="content__date">2024-09-10</div>
            <button className="content__button">참여 신청</button>
          </div>
        </div>
      </div>

      {/* 실시간 메세지 표시 영역 */}
      <div className="bubbles">
        
        {messages.map(message => 
          message.type === 'receive' ? (
            <div className="bubbles__received">{message.text}</div>
          ) : (
            <div className="bubbles__send">{message.text}</div>
          )
        )}
      </div>

      {/* 메세지 입력 영역 */}
      <div className="inputbox">
        <div className="chatinput">
          <input
            className="chatinput__input" 
            type="text" 
            placeholder="message,,," 
            onChange={(e) => seInputValue(e.target.value)}
          />
          <button 
            className="chatinput__button" 
            onClick={sendMessage}
          >
            <FaArrowAltCircleUp />
          </button>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/chat/$chatRoomId')({
  component: Chat
})