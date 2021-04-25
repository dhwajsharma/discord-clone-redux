import { AddCircle, CardGiftcard, EmojiEmotions, Gif, SettingsInputHdmiTwoTone } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from '../../features/appSlice'
import { selectUser } from '../../features/userSlice'
import db from '../../firebase'
import ChatHeader from '../ChatHeader/ChatHeader'
import Message from '../Message/Message'
import "./Chat.css"
import firebase from "firebase";

const Chat = () => {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }
    }, [channelId]);

    const sendMessages = e => {
        e.preventDefault();
        db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
            })

        setInput("");
    }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            <div className="chat_messages">
                {messages.map((message) => (
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
            </div>
            <div className="chat_input">
                <AddCircle fontSize="large" />
                <form>
                    <input value={input} disabled={!channelId} onChange={e => setInput(e.target.value)} type="text" placeholder={`Message #${channelName}`} />
                    <button onClick={sendMessages} className="chat_inputButton" type="submit">Send Message</button>
                </form>
                <div className="chat_inputIcons">
                    <CardGiftcard fontSize="large" />
                    <Gif fontSize="large" />
                    <EmojiEmotions fontSize="large" />
                </div>
            </div>
        </div >
    )
}

export default Chat
