import React from "react";
import "./Header.css";
import Search from "@mui/icons-material/Search";
import { useDataLayerValue } from "./DataLayer";



function Header() {
  // eslint-disable-next-line
  const [{ user }, dispatch] = useDataLayerValue();


  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input placeholder="Search for Artists, Songs " type="text" />

      </div>
      <div className="header_right">
        {/* <Avatar src={user?.images[0]?.url} alt={user.display_name}/>
        <h4>{user?.display_name}</h4> */}
      </div>
    </div>
  );
}

export default Header;
