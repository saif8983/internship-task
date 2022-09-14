import React from "react";
import navbarData from "../Utils/SmallNavbarData";
import Stack from "react-bootstrap/Stack";

const SmallNavbarComponet = () => {
  return (
    <>
      <Stack gap={5}>
        <div className="small-navbar-flex">
          {navbarData.map((data) => (
            <div>{data}</div>
          ))}
        </div>
      </Stack>
    </>
  );
};

export default SmallNavbarComponet;
