import { Avatar } from '@material-ui/core'
import { Add, Call, ExpandMore, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import SidebarChannel from '../SidebarChannel/SidebarChannel'
import "./Sidebar.css"

const Sidebar = () => {

    const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <h3>Dhwaj Sharma</h3>
                <ExpandMore />
            </div>
            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <ExpandMore />
                        <h4>Text Channels</h4>
                    </div>
                    <Add className="sidebar_addChannel" />
                </div>
                <div className="sidebar_channelsList">
                    <SidebarChannel />
                </div>
            </div>
            <div className="sidebar_voice">
                <SignalCellularAlt
                    className="sidebar_voiceIcon"
                    fontSize="large"
                />
                <div className="sidebar_voiceInfo">
                    <h3>Voice connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar_voiceIcons">
                    <InfoOutlined />
                    <Call />
                </div>
            </div>
            <div className="sidebar_profile">
                <Avatar className="avatar" onClick={() => auth.signOut()} src={user.photo} />
                <div className="sidebar_profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>
                <div className="sidebar_profileIcons">
                    <Mic />
                    <Headset />
                    <Settings />
                </div>
            </div>

        </div>
    )
}

export default Sidebar
