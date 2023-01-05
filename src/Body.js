import React from "react";
import "./Body.css"
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header"
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from "./SongRow"

function Body(spotify) {
    // eslint-disable-next-line
    const [{ discover_weekly }, dispatch] = useDataLayerValue()

    return (
        <div className="body">
            {/* <h1>I am body</h1> */}
            <Header spotify={spotify} />

            <div className="body_info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="body_infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>DISCOVER</h2>
                    <p>{discover_weekly?.description}</p>
                </div>

            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {discover_weekly?.tracks.items.map((items, i) => (
                    <SongRow key={i} track={items.track} />
                ))}
            </div>
        </div>
    )
}

export default Body