import React from "react";
import { Link } from "react-scroll";

class MenuItem extends React.Component {
  render() {
    return (
      <li>
        <Link
          open={open}
          onClick={() => {
            setOpen(!open);
          }}
          to="aboutUs"
          smooth={true}
          duration={1000}
        >
          Om oss
        </Link>
      </li>
    );
  }
}

export default MenuItem;
