export const initialState = {
  user: [],
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // playlists:null,
  //   Remove after developing
  // token: "BQCJh6Hm2jZrv74v6BDGQCv7m78zjZPzgkkbv1WwRQymXxxaOPmLKGpn6dSzOHjirB3sNcVkr41zsIsMVIL_KobNHpYqPr3Y0cQyy4B9WXZkQeI4FtBfr1b4eBHnpXtfbM-dwjpnoe22jgZkccaV-maw9dHxyvn4C1Wp8SPwt3TnV1XH",
};

const reducer = (state, action) => {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      }
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state;
  }

};

export default reducer;
