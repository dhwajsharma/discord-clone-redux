import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"

const Message = () => {
    return (
        <div className="message">
            <Avatar />
            <div className="message_info">
                <h4>dhwajsharma
                    <span className="message_timestamp">timestamp</span>
                </h4>
                <p>message...</p>
            </div>
        </div>
    )
}

export default Message
