import React from 'react'
import './Body.css';
import Header from './Header'
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilledWhiteRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHorizOutlined';
import SongRow from './SongRow';

function Body({spotify}) {
    const[{discover_weekly},dispatch] = useDataLayerValue();
    return (
        <div className="body">
           <Header spotify={spotify} />

           <div className="body_info">
            <img src={discover_weekly?.images[0].url} alt=""/>
            <div className="body_info_text">
            <strong>PLAYLIST</strong>
            <h2>Discover Weekly</h2>
            <p>{discover_weekly?.description}</p>
            </div>
            </div>


            <div className="body_songs">
            <div className="body_icons">
                    <PlayCircleFilledIcon className="body_play_icon body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
               {

               discover_weekly?.tracks.items.map((item) => (
                   <SongRow track={item.track} />
               ))

               }

            </div>
        </div>

    )
}

export default Body
