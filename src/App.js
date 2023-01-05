import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer"




function App() {
  const spotify = new SpotifyWebApi();
  // const [token, setToken] = useState(null);
  // eslint-disable-next-line
  const [{ user, token }, dispatch] = useDataLayerValue()
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      // setToken(_token);



      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,

        })
      }, (err) => {
        console.log("Error in getMe ", err)
      });


      spotify.getUserPlaylists().then((playlists) => {

        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })

      spotify.getPlaylist("1oNNLB79M1cSGqjIzpLJFR").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response

        })
      })
    }
    // spotify.getPlaylist("1oNNLB79M1cSGqjIzpLJFR").then((response)=>{
    //   dispatch({
    //     type:"SET_DISCOVER_WEEKLY",
    //     discover_weekly:response

    //   })
    // })

    // console.log("TOKEN:",token)
    // eslint-disable-next-line
  }, []);
  // console.log( "😗"+user)
  // console.log(token)
  return <div className="app">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
