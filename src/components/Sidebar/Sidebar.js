import { Avatar } from '@material-ui/core'
import { Add, Call, ExpandMore, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import db, { auth } from '../../firebase'
import SidebarChannel from '../SidebarChannel/SidebarChannel'
import "./Sidebar.css"

const Sidebar = () => {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))
        ))
    }, [])

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");

        if (channelName) {
            db.collection("channels").add({
                channelName: channelName,
            })
        }
    }


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
                    <Add onClick={handleAddChannel} className="sidebar_addChannel" />
                </div>
                <div className="sidebar_channelsList">
                    {channels.map(({ id, channel }) => (
                        <SidebarChannel key={id} id={id} channelName={channel.channelName} />
                    ))}
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
