import React from "react";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./index";

const Navbar = () => (
  <Stack
    direction="row"
    alignitem="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <span
        style={{
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
          paddingLeft: "10px",
        }}
        className="hide-on-small"
      >
        My<span style={{ color: "#FC1503" }}>Tube</span>
      </span>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
