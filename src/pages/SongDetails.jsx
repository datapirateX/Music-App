import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from "../redux/features/playerSlice";



const SongDetails = () => {
    const { songid } = useParams();
    
    console.log(songid);

    return 

}

export default SongDetails;
