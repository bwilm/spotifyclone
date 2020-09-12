import React from 'react'
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import HomeIconOutline from '@material-ui/icons/HomeOutlined'
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic'
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{playlists, dispatch}] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar_image"
                src="https://i.ibb.co/bdd3phP/Spotify-Logo-CMYK-White.png"
                alt=""/>

            <SidebarOption Icon={HomeIconOutline} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
            <br/>
            <strong className="sidebar_title_playlist">PLAYLISTS</strong>
            <hr/>

        {playlists?.items?.map((playlist) =>(
                <SidebarOption title={playlist.name} />  
            ))}


        </div>

    )
}

export default Sidebar
