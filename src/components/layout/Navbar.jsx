import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  return (
    <>
      <div>
        <div className="bg-[var(--main-color)]">
          {Object.keys(data).map((link, i) => (
            <Link key={i} to={`${data[link]}`}>
              <div>{link}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
