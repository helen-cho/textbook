import React from 'react'
import './Chat.css';

const ChatPage = () => {
  return (
    <div style={{margin:'50px 0px'}}>
      <div className="wrap">
        <div className="chat ch1">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">안녕하세요. 반갑습니다.</div>
        </div>
        <div className="chat ch2">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">안녕하세요. 친절한효자손입니다. 그동안 잘 지내셨어요?</div>
        </div>
        <div className="chat ch1">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">아유~ 너무요너무요! 요즘 어떻게 지내세요?</div>
        </div>
        <div className="chat ch2">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">뭐~ 늘 똑같은 하루 하루를 보내는 중이에요. 코로나가 다시 극성이어서 모이지도 못하구 있군요 ㅠㅠ 얼른 좀 잠잠해졌으면 좋겠습니다요!</div>
        </div>
        <div className="chat ch1">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">안녕하세요. 반갑습니다.</div>
        </div>
        <div className="chat ch2">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">안녕하세요. 친절한효자손입니다. 그동안 잘 지내셨어요?</div>
        </div>
        <div className="chat ch1">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">아유~ 너무요너무요! 요즘 어떻게 지내세요?</div>
        </div>
        <div className="chat ch2">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">뭐~ 늘 똑같은 하루 하루를 보내는 중이에요. 코로나가 다시 극성이어서 모이지도 못하구 있군요 ㅠㅠ 얼른 좀 잠잠해졌으면 좋겠습니다요!</div>
        </div>
        <div className="chat ch1">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">안녕하세요. 반갑습니다.</div>
        </div>
        <div className="chat ch2">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">안녕하세요. 친절한효자손입니다. 그동안 잘 지내셨어요?</div>
        </div>
        <div className="chat ch1">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">아유~ 너무요너무요! 요즘 어떻게 지내세요?</div>
        </div>
        <div className="chat ch2">
            <div className="icon"><i className="fa-solid fa-user"></i></div>
            <div className="textbox">뭐~ 늘 똑같은 하루 하루를 보내는 중이에요. 코로나가 다시 극성이어서 모이지도 못하구 있군요 ㅠㅠ 얼른 좀 잠잠해졌으면 좋겠습니다요!</div>
        </div>
      </div>
      <div>
        <textarea placeholder='Enter for ....'/>
      </div>
    </div>
  )
}

export default ChatPage