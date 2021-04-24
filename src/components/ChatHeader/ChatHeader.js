import { EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import "./ChatHeader.css"

const ChatHeader = () => {
    return (
        <div className="chatHeader">
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">
                        #
                    </span>
                    Test Channel Name
                </h3>
            </div>
            <div className="chatHeader_right">
                <Notifications />
                <EditLocationRounded />
                <PeopleAltRounded />

                <div className="chatHeader_search">
                    <input type="text" placeholder="Search" />
                    <SearchRounded />
                </div>
                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader
