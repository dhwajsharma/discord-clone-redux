import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import React from 'react'
import ChatHeader from '../ChatHeader/ChatHeader'
import "./Chat.css"

const Chat = () => {
    return (
        <div className="chat">
            <ChatHeader />
            <div className="chat_messages">

            </div>
            <div className="chat_input">
                <AddCircle fontSize="large" />
                <form>
                    <input type="text" placeholder={`Message #bleh`} />
                    <button className="chat_inputButton" type="submit">Send Message</button>
                </form>
                <div className="chat_inputIcons">
                    <CardGiftcard fontSize="large" />
                    <Gif fontSize="large" />
                    <EmojiEmotions fontSize="large" />
                </div>
            </div>
        </div>
    )
}

export default Chat
